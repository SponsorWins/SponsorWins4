'use client';
import { useEffect, useMemo, useState } from 'react';
function pad(n: number) { return String(n).padStart(2, '0'); }

export default function Countdown({ target, onEnd }: { target: number; onEnd?: () => void }) {
  const [now, setNow] = useState<number>(() => Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const ms = Math.max(0, target - now);
  useEffect(() => { if (ms<=0 && onEnd) onEnd(); }, [ms, onEnd]);
  const { d, h, m, s } = useMemo(() => {
    let r = ms; const d = Math.floor(r/86400000); r -= d*86400000;
    const h = Math.floor(r/3600000); r -= h*3600000;
    const m = Math.floor(r/60000); r -= m*60000;
    const s = Math.floor(r/1000); return { d, h, m, s };
  }, [ms]);
  if (ms<=0) return <span className="countdown ended">Closed</span>;
  return <span className="countdown">{d>0?`${d}d `:''}{pad(h)}:{pad(m)}:{pad(s)}</span>;
}
