import {uniqueNamesGenerator} from "unique-names-generator";
import DICTIONARIES from "../dictionaries";
import seedrandom from "seedrandom";

const romanNumeralGenerator = (number: number) => {
    return 'I'
        .repeat(number)
        .replace(/I{5}/g, 'V')
        .replace(/V{2}/g, 'X')
        .replace(/X{5}/g, 'L')
        .replace(/L{2}/g, 'C')
        .replace(/C{5}/g, 'D')
        .replace(/D{2}/g, 'M')
        .replace(/DC{4}/g, 'CM')
        .replace(/C{4}/g, 'CD')
        .replace(/LX{4}/g, 'XC')
        .replace(/X{4}/g, 'XL')
        .replace(/VI{4}/g, 'IX')
        .replace(/I{4}/g, 'IV')
};

const colonyNameGenerator = (seed: string) => {
    const random = seedrandom(seed)
    const randomRome = romanNumeralGenerator(Math.floor(random() * 60))
    return uniqueNamesGenerator({
        dictionaries: [DICTIONARIES.dansk],
        separator: '-',
        style: "capital",
        seed
    }) + `-${randomRome}`
}

export default colonyNameGenerator