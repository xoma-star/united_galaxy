import BiomeEnum from "../enums/biome.enum";
import landscapeEnum from "../enums/landscape.enum";
import resourceEnum from "../enums/resource.enum";

type BiomeSchema = {
    [K in keyof typeof BiomeEnum]: {
        possibleNames: string[],
        difficultyMultiplier: number,
        possibleSurfaces: {
            [K in keyof typeof landscapeEnum]?: number
        },
        faunaLevel: {
            min: number,
            max: number,
            average: number
        },
        floraLevel: {
            min: number,
            max: number,
            average: number
        },
        temperature: {
            average: number,
            min: number,
            max: number
        },
        possibleResources: {
            [K in keyof typeof resourceEnum]?: number
        },
        name: string
    }
}

export default BiomeSchema