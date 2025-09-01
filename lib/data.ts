export type Listing = {
  id: string;
  league: 'NFL'|'NBA'|'NHL'|'MLB'|'MLS';
  team: string; stadium: string; asset: string;
  price: number; endsAt: number; closed?: boolean;
};

function minutesFromNow(mins: number){ return Date.now() + mins*60*1000; }

export const initialListings: Listing[] = [
  { id:'nba-pp-jersey', league:'NBA', team:'Portland Pioneers',    stadium:'Rose City Arena',         asset:'Jersey Patch',            price: 25000, endsAt: minutesFromNow(42) },
  { id:'nfl-lv-led',    league:'NFL', team:'Las Vegas Vipers',     stadium:'Mojave Bank Stadium',     asset:'LED Signage',             price: 32000, endsAt: minutesFromNow(55) },
  { id:'mls-mw-pitch',  league:'MLS', team:'Miami Waves',          stadium:'Atlantic Energy Stadium',  asset:'Pitch-Level Signage',     price: 18000, endsAt: minutesFromNow(18) },
  { id:'nhl-pg-dash',   league:'NHL', team:'Portland Glaciers',    stadium:'Rose Ice Arena',           asset:'Dasher-Board Signage',    price: 22750, endsAt: minutesFromNow(9)  },
  { id:'mlb-pb-wall',   league:'MLB', team:'Portland Beavers',     stadium:'Cascade Ballpark',         asset:'Outfield Wall Signage',   price: 28900, endsAt: minutesFromNow(73) },
  { id:'nhl-mb-ice',    league:'NHL', team:'Miami Barracudas',     stadium:'Ocean Ice Center',         asset:'In-Ice Logo',             price: 19800, endsAt: minutesFromNow(31) },
  { id:'nba-pp-video',  league:'NBA', team:'Portland Pioneers',    stadium:'Rose City Arena',          asset:'Videoboard Signage',      price: 38500, endsAt: minutesFromNow(24) },
  { id:'nfl-pl-helmet', league:'NFL', team:'Portland Lumberjacks', stadium:'Timberline Field',         asset:'Helmet Logo',             price: 45000, endsAt: minutesFromNow(66) }
];

export const fakeBrands = [
  'Nike','Coca-Cola','Adidas','PepsiCo','SeatGeek',
  'DraftKings','Verizon','Amazon Web Services','Budweiser','Delta Airlines'
];
