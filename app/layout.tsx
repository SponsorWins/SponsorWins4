import './globals.css';

export const metadata = {
  title: 'SponsorWins — Bid. Win. Sponsor the Game.',
  description: 'Sports sponsorship auctions across NFL, NBA, NHL, MLB, and MLS.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
