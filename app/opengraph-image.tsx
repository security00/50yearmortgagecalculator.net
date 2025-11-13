import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 64,
          background:
            'linear-gradient(135deg, rgba(37,99,235,1) 0%, rgba(30,64,175,1) 60%, rgba(76,29,149,1) 100%)',
          color: 'white',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Helvetica, Arial',
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -1,
            textShadow: '0 6px 18px rgba(0,0,0,.25)',
          }}
        >
          50 Year Mortgage Calculator
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            opacity: 0.9,
          }}
        >
          Compare 50 vs 30-year payments instantly — Free
        </div>
        <div
          style={{
            marginTop: 36,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: 'rgba(255,255,255,.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 28,
              border: '1px solid rgba(255,255,255,.25)',
            }}
          >
            50
          </div>
          <div style={{ fontSize: 24, opacity: 0.9 }}>50YearMortgageCalculator.net</div>
        </div>
      </div>
    ),
    size,
  );
}

