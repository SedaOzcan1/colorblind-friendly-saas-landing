import { ImageResponse } from 'next/og';

export const alt = 'Test — Her fikri test et. Kanıtlanmışı büyüt.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Not: Varsayılan OG yazı tipi bazı Türkçe harfleri (ı, ş, ğ) içermeyebilir;
// bu yüzden görseldeki metinler bu harflerden kaçınacak şekilde seçildi.
const paper = '#F4F1EA';
const ink = '#15131C';
const brand = '#4F35E8';
const lime = '#D9F45A';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        backgroundColor: paper,
        backgroundImage: `linear-gradient(to right, rgba(79,53,232,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,53,232,0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        color: ink,
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, letterSpacing: 2 }}
      >
        <span>DENEY #01</span>
        <span>N = 12.480</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            fontSize: 200,
            fontWeight: 800,
            letterSpacing: -10,
            lineHeight: 1,
          }}
        >
          test<span style={{ color: brand }}>.</span>
        </div>
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, marginTop: 12 }}>
          Her fikri test et.
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 30 }}>
        <span
          style={{
            display: 'flex',
            backgroundColor: lime,
            border: `2px solid ${ink}`,
            padding: '6px 16px',
          }}
        >
          Varyant B +%18,4
        </span>
        <span>A/B testleri · feature flag · istatistik</span>
      </div>
    </div>,
    size,
  );
}
