import type { CSSProperties } from 'react';

type LabTubeProps = {
  /** Sıvı seviyesi, yüzde */
  level: number;
  className?: string;
  /** Dalga animasyonunu kaydırmak için (s) */
  delay?: number;
  /** Ölçek çizgileri */
  marks?: boolean;
};

/**
 * Cam deney tüpü. Konumlandırma çağıran tarafa aittir: className içinde
 * `absolute` ya da `relative` verilmelidir.
 * İçindeki sıvı, dönen yuvarlatılmış kareyle yavaşça
 * dalgalanır (yalnızca transform). Tamamen dekoratiftir.
 */
export function LabTube({ level, className, delay = 0, marks = true }: LabTubeProps) {
  const style = { '--level': `${level}%` } as CSSProperties;
  const anim = { animationDelay: `${-delay}s` };

  return (
    <div aria-hidden="true" className={className}>
      {/* Ağız kısmı */}
      <div className="absolute -inset-x-1.5 top-0 z-10 h-3 rounded-sm glass" />
      <div className="tube h-full w-full glass pt-3" style={style}>
        <div className="liquid">
          <div className="wave wave-back" style={anim} />
          <div className="wave" style={anim} />
        </div>
        {marks && (
          <div className="absolute inset-y-6 right-1.5 z-[3] flex flex-col justify-between">
            {Array.from({ length: 6 }, (_, i) => (
              <span key={i} className={`block h-px bg-ink/40 ${i % 2 === 0 ? 'w-2.5' : 'w-1.5'}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
