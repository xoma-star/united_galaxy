export default function weighted_random<T>(values: {[k: string]: number}) {
    const rnd = Math.random();
    let result: string = '', acc = 0;
    (Object.keys(values)).forEach((key) => {
        if (result === '' && rnd > 1 - values[key] - acc)
            result = key;
        acc += parseFloat(values[key].toString());
    })

    return result as T;
}