export default function LogoSW({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="SponsorWins logo" role="img">
      <defs>
        <linearGradient id="sw-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFD86B"/><stop offset="1" stopColor="#F5C518"/>
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#sw-grad)"/>
      {/* Sleek SW monogram */}
      <path d="M18 24c2-4 7-6 14-6h14" stroke="#0b0b0b" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M18 40h14c8 0 12-2 12-6c0-4-4-6-12-6" stroke="#0b0b0b" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M38 22l8 20" stroke="#0b0b0b" strokeWidth="5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}
