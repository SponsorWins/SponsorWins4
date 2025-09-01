function crest(team: string) {
  return team.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase();
}

export default function AssetScene({ asset, team }: { asset: string; team: string }) {
  const initials = crest(team);

  if (/Jersey Patch/i.test(asset)) {
    return (
      <svg viewBox="0 0 360 200" role="img" aria-label="Jersey Patch">
        <defs><linearGradient id="bgJ" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#102148"/><stop offset="1" stopColor="#07142c"/></linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#bgJ)"/>
        <rect x="20" y="18" width="320" height="124" rx="10" fill="#0c1736" stroke="#1b3a78"/>
        <rect x="270" y="26" width="44" height="44" rx="8" fill="#4aa0ff" stroke="#8ad3ff" strokeWidth="3"/>
        <text x="292" y="55" fontSize="18" textAnchor="middle" fill="#0b0b0b" fontWeight="900">{initials}</text>
        <text x="40" y="54" fontSize="16" fill="#cfe1ff" opacity=".9">AUTHENTIC JERSEY</text>
      </svg>
    );
  }
  if (/LED/i.test(asset)) {
    return (
      <svg viewBox="0 0 360 200" role="img" aria-label="LED Signage">
        <defs><linearGradient id="bgL" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#102148"/><stop offset="1" stopColor="#07142c"/></linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#bgL)"/>
        <rect x="24" y="80" width="312" height="28" rx="6" fill="#05112a" stroke="#21408a"/>
        <rect x="24" y="80" width="312" height="28" rx="6" fill="#ffd86b" opacity=".35"/>
        <text x="180" y="99" fontSize="16" textAnchor="middle" fill="#0b0b0b" fontWeight="900">LED RIBBON • {initials}</text>
      </svg>
    );
  }
  if (/Pitch-Level/i.test(asset)) {
    return (
      <svg viewBox="0 0 360 200" role="img" aria-label="Pitch-Level">
        <defs><linearGradient id="bgP" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#102148"/><stop offset="1" stopColor="#07142c"/></linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#bgP)"/>
        <rect x="0" y="150" width="360" height="30" fill="#0c5a2a"/>
        <rect x="20" y="154" width="320" height="22" rx="4" fill="#17d3a5" opacity=".9"/>
        <text x="180" y="170" fontSize="13" textAnchor="middle" fill="#0b0b0b" fontWeight="900">PITCH-LEVEL SIGNAGE</text>
      </svg>
    );
  }
  if (/In-Ice/i.test(asset)) {
    return (
      <svg viewBox="0 0 360 200" role="img" aria-label="In-Ice Logo">
        <defs><linearGradient id="bgI" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#102148"/><stop offset="1" stopColor="#07142c"/></linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#bgI)"/>
        <circle cx="180" cy="110" r="58" fill="#e8f3ff" opacity=".85" stroke="#9cc"/>
        <text x="180" y="114" fontSize="28" textAnchor="middle" fontWeight="900" fill="#5fb3ff">{initials}</text>
        <text x="180" y="150" fontSize="14" textAnchor="middle" fill="#cfe1ff">IN-ICE LOGO</text>
      </svg>
    );
  }
  if (/Dasher-Board/i.test(asset)) {
    return (
      <svg viewBox="0 0 360 200" role="img" aria-label="Dasher Boards">
        <defs><linearGradient id="bgD" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#102148"/><stop offset="1" stopColor="#07142c"/></linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#bgD)"/>
        <rect x="0" y="150" width="360" height="30" fill="#ffffff"/>
        <rect x="12" y="154" width="80" height="22" fill="#c6a8ff"/>
        <rect x="104" y="154" width="100" height="22" fill="#9d7cff"/>
        <rect x="216" y="154" width="130" height="22" fill="#ffe082"/>
        <rect x="0" y="180" width="360" height="10" fill="#cfe6ff" opacity=".6"/>
        <text x="180" y="130" fontSize="16" textAnchor="middle" fill="#dfe9ff">DASHER-BOARD SIGNAGE</text>
      </svg>
    );
  }
  if (/Outfield Wall/i.test(asset)) {
    return (
      <svg viewBox="0 0 360 200" role="img" aria-label="Outfield Wall">
        <defs><linearGradient id="bgO" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#102148"/><stop offset="1" stopColor="#07142c"/></linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#bgO)"/>
        <rect x="0" y="140" width="360" height="40" fill="#083a2a"/>
        <rect x="16" y="144" width="80" height="28" rx="4" fill="#58c04a"/>
        <rect x="108" y="144" width="100" height="28" rx="4" fill="#2f8a3a"/>
        <rect x="222" y="144" width="120" height="28" rx="4" fill="#ffe082"/>
        <text x="180" y="128" fontSize="18" textAnchor="middle" fill="#dfe9ff">OUTFIELD WALL SIGNAGE</text>
      </svg>
    );
  }
  if (/Helmet Logo/i.test(asset)) {
    return (
      <svg viewBox="0 0 360 200" role="img" aria-label="Helmet Logo">
        <defs><linearGradient id="bgH" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#102148"/><stop offset="1" stopColor="#07142c"/></linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#bgH)"/>
        <path d="M60 150 q0-90 120-90 q90 0 120 60 v70 h-44 v-22 q-42 18 -106 18 q-54 0 -90 -36z" fill="#142a56" stroke="#2b4fa0" strokeWidth="4"/>
        <circle cx="150" cy="120" r="22" fill="white" stroke="#ff6b6b" strokeWidth="4"/>
        <text x="150" y="126" fontSize="18" textAnchor="middle" fontWeight="900" fill="#ff6b6b">{initials}</text>
      </svg>
    );
  }
  if (/Videoboard/i.test(asset)) {
    return (
      <svg viewBox="0 0 360 200" role="img" aria-label="Videoboard">
        <defs><linearGradient id="bgV" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#102148"/><stop offset="1" stopColor="#07142c"/></linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#bgV)"/>
        <rect x="48" y="24" width="264" height="120" rx="10" fill="#111" stroke="#333"/>
        <rect x="56" y="32" width="248" height="104" rx="8" fill="#213a78"/>
        <text x="180" y="100" fontSize="16" textAnchor="middle" fill="#dbe7ff" fontWeight="800">CENTER-HUNG VIDEOBOARD</text>
      </svg>
    );
  }
  return <svg viewBox="0 0 360 200"><rect width="100%" height="100%" fill="#0c1736"/></svg>;
}
