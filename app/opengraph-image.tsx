import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Victoria Park Nails and Spa - Calgary Premiere Nail Salon & Spa';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #8b9a7c 0%, #a1b08c 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 40,
            textAlign: 'center',
          }}
        >
          Victoria Park Nails and Spa
        </div>
        <div
          style={{
            fontSize: 36,
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
            maxWidth: '80%',
            lineHeight: 1.2,
          }}
        >
          Calgary&apos;s Premier Nail Salon & Spa
        </div>
        <div
          style={{
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.8)',
            marginTop: 40,
            textAlign: 'center',
          }}
        >
          Exceptional Service • Beautiful Results • Victoria Park
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}