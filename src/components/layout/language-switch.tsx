import { otherLang, type Lang } from '@/content/i18n';
import { cn } from '@/lib/cn';

/**
 * Diğer dile geçiş bağlantısı. Görünen metin kısa koddur ("EN");
 * erişilebilir ad hedef dilin kendi adıdır ("English") ve lang ile işaretlenir,
 * böylece ekran okuyucu doğru telaffuz eder.
 */
export function LanguageSwitch({
  lang,
  label,
  name,
  className,
  onNavigate,
}: {
  lang: Lang;
  /** Görünen kısa kod: "EN" */
  label: string;
  /** Hedef dilin kendi adı: "English" */
  name: string;
  className?: string;
  onNavigate?: () => void;
}) {
  const target = otherLang(lang);
  return (
    <a
      href={`/${target}`}
      hrefLang={target}
      lang={target}
      aria-label={name}
      onClick={onNavigate}
      className={cn(
        'grid h-9 min-w-11 place-items-center rounded-md border border-line px-2 mono-label text-ink transition-colors hover:border-ink',
        className,
      )}
    >
      {label}
    </a>
  );
}
