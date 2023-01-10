import {adjectives, names, NumberDictionary, uniqueNamesGenerator} from "unique-names-generator";

const systemNameGenerator = () => {
    return uniqueNamesGenerator({
        dictionaries: [adjectives, names, NumberDictionary.generate({length: 3})],
        separator: '-',
        style: "capital"
    })
}

export default systemNameGenerator