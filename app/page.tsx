'use client';

import LogoSW from '@/components/LogoSW';
import AssetScene from '@/components/AssetScene';
import Countdown from '@/components/Countdown';
import Ticker from '@/components/Ticker';
import FilterBar, { LeagueKey } from '@/components/FilterBar';
import VerifyDialog from '@/components/VerifyDialog';
import BidDialog from '@/components/BidDialog';
import { initialListings, fakeBrands, Listing as L } from '@/lib/data';
import { crest, fmtUSD, randInt } from '@/lib/utils';
import { useEffect, useMemo, useState } from 'react';

export default function Page() {
  const [listings, setListings] = useState<L[]>(initialListings);
  const [league, setLeague] = useState<LeagueKey>('ALL');
  const [activity, setActivity] = useState<string[]>([
    'Nike bid $45,000 on Helmet Logo • Portland Lumberjacks (NFL)',
    'Coca-Cola bid $38,500 on Videoboard • Portland Pioneers (NBA)',
    'PepsiCo bid $28,900 on Outfield Wall • Portland Beavers (MLB)'
  ]);
  const [verified, setVerified] = useState(false);
  const [verifyOpen, setVerifyOpen] = useState(false);
  const [bidOpen, setBidOpen] = useState(false);
  const [activeListing, setActiveListing] = useState<L | null>(null);

  useEffect(() => { setVerified(localStorage.getItem('sw_verified') === '1'); }, []);

  // Simulate live bids (skip closed)
  useEffect(() => {
    const t = setInterval(() => {
      setListings(prev => {
        const openItems = prev.filter(x=>!x.closed && x.endsAt > Date.now());
        if (!openItems.length) return prev;
        const pick = openItems[randInt(0, openItems.length-1)];
        const bump = Math.max(250, Math.round(pick.price * 0.02));
        const brand = fakeBrands[randInt(0, fakeBrands.length-1)];
        const updated = prev.map(x => x.id === pick.id ? { ...x, price: x.price + bump } : x);
        const line = `${brand} bid ${fmtUSD(pick.price + bump)} on ${pick.asset} • ${pick.team} (${pick.league})`;
        setActivity(a => [line, ...a].slice(0, 12));
        return updated;
      });
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const handleCTA = () => { if (!verified) setVerifyOpen(true); };
  const openBid = (l: L) => {
    if (l.closed || l.endsAt <= Date.now()) return;
    if (!verified) { setVerifyOpen(true); return; }
    setActiveListing(l); setBidOpen(true);
  };
  const placeBid = (amount: number) => {
    if (!activeListing) return;
    setListings(prev => prev.map(x => x.id === activeListing.id ? { ...x, price: amount } : x));
    const brand = (typeof window !== 'undefined' && localStorage.getItem('sw_email')) || 'Verified Bidder';
    setActivity(a => [`${brand} bid ${fmtUSD(amount)} on ${activeListing.asset} • ${activeListing.team} (${activeListing.league})`, ...a].slice(0, 12));
  };
  const markClosed = (id: string) => {
    setListings(prev => prev.map(x => x.id === id ? { ...x, closed: true } : x));
    const won = listings.find(x => x.id === id);
    if (won) setActivity(a => [`WINNER: ${won.team} • ${won.asset} at ${fmtUSD(won.price)}`, ...a].slice(0, 12));
  };

  const view = useMemo(() => {
    const base = league === 'ALL' ? listings : listings.filter(l => l.league === league);
    return { featured: base.slice(0,3), grid: base };
  }, [listings, league]);

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <LogoSW size={48} />
            <div className="title">SPONSORWINS</div>
          </div>
          <div style={{marginLeft:'auto'}}>
            {verified ? <span className="badge">✔ Verified</span> : <button className="btn" onClick={()=>setVerifyOpen(true)}>Verify to Bid</button>}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" aria-label="Hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div>
            <h1>Bid. Win. Sponsor the Game.</h1>
            <p>Season-long packages, single-game features, and arena takeovers across NFL, NBA, NHL, MLB, and MLS.</p>
            <a className="cta" onClick={handleCTA} href="#listings">Create a Verified Account to Bid</a>
            <div className="pills" style={{marginTop:18}}>
              <span className="pill">NFL</span><span className="pill">NBA</span><span className="pill">NHL</span><span className="pill">MLB</span><span className="pill">MLS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Auctions + Filters */}
      <main className="wrap">
        <section className="section" aria-label="Live Auctions">
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <h2 style={{marginBottom:0}}>Live Auctions</h2>
          </div>
          <FilterBar value={league} onChange={setLeague} />
          <div className="row" style={{marginTop:12}}>
            {view.featured.map(item => (
              <article className="card" key={item.id}>
                <div className="media"><AssetScene asset={item.asset} team={item.team} /></div>
                <div className="meta">
                  <div className="asset">{item.asset}</div>
                  <div className="team"><span className="crest">{crest(item.team)}</span> {item.team}</div>
                  <div className="note">{item.stadium} • {item.league}</div>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:6}}>
                    <strong>{fmtUSD(item.price)}</strong>
                    <Countdown target={item.endsAt} onEnd={()=>markClosed(item.id)} />
                  </div>
                  <div style={{marginTop:10}}>
                    <button className="btn" onClick={()=>openBid(item)} disabled={item.closed || item.endsAt <= Date.now()}>
                      {item.closed || item.endsAt <= Date.now() ? 'Closed' : 'Place Bid'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Listings Grid */}
        <section id="listings" className="grid" aria-label="Listings">
          <div className="grid-head">
            <strong>Featured Sponsorships</strong>
            <span className="pill" style={{borderRadius:10}}>Shuffle</span>
          </div>
          <div className="grid-body">
            {view.grid.map(item => (
              <article className="card" key={item.id}>
                <div className="media"><AssetScene asset={item.asset} team={item.team} /></div>
                <div className="meta">
                  <div className="asset">{item.asset}</div>
                  <div style={{opacity:.9}}>{item.team}</div>
                  <div style={{opacity:.75}}>{item.stadium} • {item.league}</div>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:6}}>
                    <strong>{fmtUSD(item.price)}</strong>
                    <Countdown target={item.endsAt} onEnd={()=>markClosed(item.id)} />
                  </div>
                  <div style={{marginTop:10}}>
                    <button className="btn" onClick={()=>openBid(item)} disabled={item.closed || item.endsAt <= Date.now()}>
                      {item.closed || item.endsAt <= Date.now() ? 'Closed' : 'Place Bid'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Ticker items={activity} />

      <footer className="wrap" style={{textAlign:'center', color:'#9fb0cc'}}>
        © 2025 SponsorWins — Prototype (Verified accounts required to bid)
      </footer>

      <VerifyDialog open={verifyOpen} onClose={()=>setVerifyOpen(false)} onVerified={()=>setVerified(true)} />
      <BidDialog open={bidOpen} onClose={()=>setBidOpen(false)} listing={activeListing} onPlaceBid={placeBid} />
    </>
  );
}
