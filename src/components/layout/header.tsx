'use client';

import { useEffect, useRef, useState } from 'react';
import { megaMenu, navLinks, type MegaGroupId } from '@/content/landing';
import { cn } from '@/lib/cn';
import { ButtonLink } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Logo } from '@/components/ui/logo';
import { MegaMenu } from './mega-menu';
import { ThemeSwitcher } from './theme-switcher';

const navItem =
  'relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  // Masaüstü mega menü: hangi düğmeyle açıldı
  const [mega, setMega] = useState<MegaGroupId | null>(null);
  const megaTriggerRefs = useRef<Partial<Record<MegaGroupId, HTMLButtonElement | null>>>({});
  const headerRef = useRef<HTMLElement>(null);

  // Kaydırınca cam arka plan
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Görünen bölüme göre aktif menü öğesi
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  // Mobil menü: Escape ile kapanır, masaüstü genişliğe geçince kapanır
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  // Mega menü: açılınca ilgili sütuna odak; Escape / dışarı tıklama / dar ekran kapatır
  useEffect(() => {
    if (!mega) return;
    headerRef.current?.querySelector<HTMLElement>('#mega-menu [data-autofocus]')?.focus();
    const close = (returnFocus: boolean) => {
      if (returnFocus) megaTriggerRefs.current[mega]?.focus();
      setMega(null);
    };
    const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && close(true);
    const onPointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) close(false);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => !desktop.matches && close(false);
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', onResize);
    };
  }, [mega]);

  const solid = scrolled || open || mega !== null;

  return (
    <header
      ref={headerRef}
      className={cn(
        'sticky top-0 z-40 border-b transition-[background-color,border-color] duration-300',
        solid ? 'border-line bg-glass backdrop-blur-md' : 'border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 xl:px-0">
        <Logo />

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {megaMenu.groups.map((g) => {
              const expanded = mega === g.id;
              const hasActive = g.links.some((link) => link.href.slice(1) === active);
              return (
                <li key={g.id}>
                  <button
                    ref={(el) => {
                      megaTriggerRefs.current[g.id] = el;
                    }}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls="mega-menu"
                    onClick={() => setMega(expanded ? null : g.id)}
                    className={cn(
                      navItem,
                      expanded || hasActive ? 'text-ink' : 'text-muted hover:text-ink',
                    )}
                  >
                    {g.label}
                    <Icon
                      name="chevronDown"
                      className={cn(
                        'size-4 transition-transform duration-300',
                        expanded && 'rotate-180',
                      )}
                    />
                  </button>
                </li>
              );
            })}
            <li>
              <a
                href="#pricing"
                aria-current={active === 'pricing' ? 'location' : undefined}
                className={cn(
                  navItem,
                  'after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:bg-brand after:transition-transform after:duration-300',
                  active === 'pricing'
                    ? 'text-ink after:scale-x-100'
                    : 'text-muted after:scale-x-0 hover:text-ink',
                )}
              >
                Fiyatlar
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher compact className="hidden lg:block" />
          <ButtonLink
            href="#contact"
            size="sm"
            className="hidden sm:inline-flex lg:hidden xl:inline-flex"
          >
            Demo isteyin
          </ButtonLink>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            onClick={() => setOpen((o) => !o)}
            className="relative grid size-11 place-items-center rounded-md hover:bg-ink/5 lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-3.5 w-5">
              <span
                className={cn(
                  'absolute left-0 h-0.5 w-5 bg-current transition-transform duration-300',
                  open ? 'top-1.5 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'absolute top-1.5 left-0 h-0.5 w-3 bg-current transition-opacity duration-200',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 h-0.5 w-5 bg-current transition-transform duration-300',
                  open ? 'top-1.5 -rotate-45' : 'top-3',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <MegaMenu
        open={mega !== null}
        group={mega}
        active={active}
        onClose={() => {
          if (mega) megaTriggerRefs.current[mega]?.focus();
          setMega(null);
        }}
        onNavigate={() => setMega(null)}
      />

      {/* Mobil menü: Figma'daki mobil menü kart panelinden uyarlandı */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-3 top-full mt-2 max-h-[calc(100dvh-5.5rem)] animate-pop overflow-y-auto rounded-[18px] border border-line bg-surface shadow-[0_12px_35px_rgb(13_5_26/0.16)] sm:inset-x-auto sm:right-6 sm:w-[22rem] lg:hidden"
      >
        <nav aria-label="Mobil menü" className="p-3">
          <div className="flex items-center justify-between py-1 pr-1 pl-3">
            <p className="text-[0.95rem] font-semibold">Keşfedin</p>
            <button
              type="button"
              aria-label="Kapat"
              onClick={() => {
                setOpen(false);
                menuButtonRef.current?.focus();
              }}
              className="grid size-11 place-items-center rounded-lg text-muted hover:bg-ink/5 hover:text-ink"
            >
              <Icon name="x" className="size-5" />
            </button>
          </div>
          <ul className="mt-1 space-y-1">
            {navLinks.map((link, i) => {
              const isActive = active === link.href.slice(1);
              const descId = `mobil-aciklama-${i}`;
              return (
                <li
                  key={link.href}
                  className="animate-fade-up"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? 'location' : undefined}
                    aria-describedby={descId}
                    className={cn(
                      'block rounded-[10px] px-3 py-2.5 transition-colors',
                      isActive ? 'bg-brand/10' : 'hover:bg-ink/5',
                    )}
                  >
                    <span className="block font-semibold">{link.label}</span>
                    <span
                      id={descId}
                      aria-hidden="true"
                      className="mt-0.5 block text-[0.8125rem] text-muted"
                    >
                      {link.description}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 space-y-3 border-t border-line px-1 pt-4 pb-1">
            <ThemeSwitcher />
            <ButtonLink href="#contact" onClick={() => setOpen(false)} className="w-full">
              Demo isteyin
            </ButtonLink>
          </div>
        </nav>
      </div>

      {/* Kaydırma ilerlemesi: cetvel çizgisi */}
      <div aria-hidden="true" className="absolute inset-x-0 -bottom-px h-1.5 overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,var(--line)_0_1px,transparent_1px_40px)]" />
        <div className="scroll-progress absolute inset-x-0 bottom-0 h-[3px] bg-brand" />
      </div>
    </header>
  );
}
