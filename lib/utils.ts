export function fmtUSD(n: number) {
  return `$${n.toLocaleString()}`;
}
export function crest(team: string) {
  return team.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();
}
export function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
