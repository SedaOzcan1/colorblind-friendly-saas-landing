import { useSyncExternalStore } from 'react';

/** Tek görünüm tercihi. Değer <html data-theme="…"> üzerine yazılır. */
export const THEMES = ['normal', 'dark', 'color-safe'] as const;
export type Theme = (typeof THEMES)[number];

/** lib/theme-script.ts ile aynı anahtar olmalı */
export const THEME_KEY = 'test-theme';

const DARK_QUERY = '(prefers-color-scheme: dark)';
const listeners = new Set<() => void>();

export function isTheme(value: unknown): value is Theme {
  return typeof value === 'string' && (THEMES as readonly string[]).includes(value);
}

function stored(): Theme | null {
  try {
    const value = window.localStorage.getItem(THEME_KEY);
    return isTheme(value) ? value : null;
  } catch {
    return null;
  }
}

function systemTheme(): Theme {
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'normal';
}

/** Geçerli mod: tema betiğinin <html> üzerine yazdığı değer esas alınır. */
function getSnapshot(): Theme {
  const current = document.documentElement.dataset.theme;
  return isTheme(current) ? current : 'normal';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
  listeners.forEach((listener) => listener());
}

export function setTheme(theme: Theme) {
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* Gizli sekme vb.: seçim yalnızca bu oturumda geçerli */
  }
  applyTheme(theme);
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  // Kullanıcı henüz seçim yapmadıysa sistem tercihini izle
  const mq = window.matchMedia(DARK_QUERY);
  const onSystemChange = () => {
    if (!stored()) applyTheme(systemTheme());
  };
  mq.addEventListener('change', onSystemChange);
  return () => {
    listeners.delete(listener);
    mq.removeEventListener('change', onSystemChange);
  };
}

export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, getSnapshot, () => 'normal');
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

/**
 * Modu değiştirir. Destekleyen tarayıcılarda tıklanan noktadan dairesel
 * açılarak geçer; hareketi azalt tercihinde animasyonsuz.
 */
export function changeTheme(theme: Theme, origin?: { x: number; y: number }) {
  const doc = document as ViewTransitionDoc;
  if (!doc.startViewTransition || prefersReducedMotion()) {
    setTheme(theme);
    return;
  }

  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? 0;
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );
  const transition = doc.startViewTransition(() => setTheme(theme));

  transition.ready
    .then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        {
          duration: 600,
          easing: 'cubic-bezier(.4,0,.2,1)',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    })
    .catch(() => {});
}
