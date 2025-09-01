'use client';
import { useEffect, useState } from 'react';

export default function VerifyDialog({
  open, onClose, onVerified
}: { open: boolean; onClose: () => void; onVerified: (email: string) => void }) {
  const [email, setEmail] = useState('');
  useEffect(() => { if (!open) setEmail(''); }, [open]);
  if (!open) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Verify account">
      <div className="modal">
        <h3>Verify your account</h3>
        <p>Enter your email to receive a magic link. (Prototype: we’ll auto-verify for demo purposes.)</p>
        <input className="input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@brand.com" type="email" />
        <div className="actions">
          <button className="btn" onClick={onClose}>Cancel</button>
          <button className="btn" onClick={()=>{
            const v = email.trim(); if (!v) return;
            localStorage.setItem('sw_verified','1'); localStorage.setItem('sw_email', v);
            onVerified(v); onClose();
          }}>Send Magic Link</button>
        </div>
        <div style={{marginTop:10}} className="badge">Prototype mode: instant verification</div>
      </div>
    </div>
  );
}
