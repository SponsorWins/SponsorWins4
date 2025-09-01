export default function Ticker({ items }: { items: string[] }) {
  const loop = items.concat(items);
  return (
    <section className="ticker-wrap" aria-label="Recent Activity">
      <div className="t-title">RECENT ACTIVITY</div>
      <div className="t-viewport">
        <div className="t-track">
          {loop.map((txt, i) => (
            <span className="t-item" key={i}><span className="dot" /> {txt}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
