'use client';
const LEAGUES = ['ALL','NFL','NBA','NHL','MLB','MLS'] as const;
export type LeagueKey = typeof LEAGUES[number];

export default function FilterBar({ value, onChange }: { value: LeagueKey; onChange: (v: LeagueKey) => void }) {
  return (
    <div className="pills" style={{justifyContent:'flex-start', flexWrap:'wrap'}}>
      {LEAGUES.map(l => (
        <button key={l} className={`pill${value===l ? ' is-active' : ''}`} onClick={() => onChange(l)} type="button">
          {l}
        </button>
      ))}
    </div>
  );
}
