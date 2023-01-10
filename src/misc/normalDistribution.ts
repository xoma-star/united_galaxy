import seedrandom from 'seedrandom'

const normalDistribution = (seed: string): number => {
    const rnd = seedrandom(seed)
    let u = 0, v = 0;
    while(u === 0) u = rnd(); //Converting [0,1) to (0,1)
    while(v === 0) v = rnd();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return normalDistribution(seed) // resample between 0 and 1
    return num
}
export default normalDistribution