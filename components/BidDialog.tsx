'use client';
import { useEffect, useState } from 'react';
import { fmtUSD } from '@/lib/utils';
import type { Listing } from '@/lib/data';

export default function BidDialog({
  open, onClose, listing, onPlaceBid
}: {
  open: boolean; onClose: () => void; listing: Listing | null; onPlaceBid: (amount: number) => void;
}) {
  const [amount, setAmount] = useState<number | ''>('');
  const min = listing ? Math.ceil(listing.price + Math.max(250, listing.price * 0.03)) : 0;

  useEffect(() => { setAmount(listing ? min : ''); }, [listing]);

  if (!open || !listing) return null;
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Place bid">
      <div className="modal">
        <h3>Place a bid</h3>
        <p><strong>{listing.team}</strong> — {listing.asset}<br/>{listing.stadium} • {listing.league}</p>
        <p>Current: {fmtUSD(listing.price)} &nbsp;•&nbsp; Minimum next bid: <strong>{fmtUSD(min)}</strong></p>
        <input
          className="input" type="number" value={amount} min={min}
          onChange={e=>setAmount(Number(e.target.value))} placeholder={String(min)}
        />
        <div className="actions">
          <button className="btn" onClick={onClose}>Cancel</button>
          <button className="btn" onClick={()=>{
            const n = typeof amount === 'number' ? amount : Number(amount);
            if (!Number.isFinite(n) || n < min) return;
            onPlaceBid(n); onClose();
          }}>Confirm Bid</button>
        </div>
      </div>
    </div>
  );
}
