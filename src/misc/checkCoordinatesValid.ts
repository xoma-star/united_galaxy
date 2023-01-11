import seedrandom from "seedrandom";

const checkCoordinatesValid = (x: string, y: string) => {
    if(new RegExp(/[0-9a-fA-F]{4}/).test(x) && new RegExp(/[0-9a-fA-F]{4}/).test(y)) {
        const random = seedrandom([x.slice(0, 3), y.slice(0, 3)].join(':'))
        const coordinates = [
            parseInt(x.split('').pop() as string, 16),
            parseInt(y.split('').pop() as string, 16)
        ]
        let rnd = random()
        for(let i = 0; i < coordinates[0] + 1; i++){
            for (let j = 0; j < coordinates[1] + 1; j++){
                rnd = random()
            }
        }
        return rnd <= 0.2
    }
    return new RegExp(/[0-9a-fA-F]{3}/).test(x) && new RegExp(/[0-9a-fA-F]{3}/).test(y)

}

export default checkCoordinatesValid