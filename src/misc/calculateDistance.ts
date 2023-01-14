import checkCoordinatesValid from "./checkCoordinatesValid";

const calculateDistance = (a: string, b: string) => {
    const aParsed = a.split(':')
    const bParsed = b.split(':')
    if(checkCoordinatesValid(aParsed[0], aParsed[1]) && checkCoordinatesValid(bParsed[0], bParsed[1])){
        return Math.sqrt(
            (parseInt(aParsed[0], 16) - parseInt(bParsed[0], 16)) ** 2 +
            (parseInt(aParsed[1], 16) - parseInt(bParsed[1], 16)) ** 2
        ) * 4
    }
    return Infinity
}

export default calculateDistance