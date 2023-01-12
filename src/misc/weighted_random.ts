import seedrandom from 'seedrandom'

export default function weighted_random<T>(values: {[k: string]: number}, seed: string) {
    const rnd = seedrandom(seed);
    let table = []
    for(let i in values){
        for (let j = 0; j < values[i] * 10; j++){
            table.push(i)
        }
    }

    return table[Math.floor(rnd() * table.length)] as T
    // let result: string = '', acc = 0;
    // (Object.keys(values)).forEach((key) => {
    //     if (result === '' && rnd() > 1 - values[key] - acc){
    //         result = key
    //     }
    //     acc += values[key]
    // })

    // return result as T;
}