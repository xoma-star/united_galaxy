import SystemEnum from "../enums/system.enum";
import systemControlledByEnum from "../enums/systemControlledBy.enum";
import BiomeEnum from "../enums/biome.enum";
import ResourceEnum from "../enums/resource.enum";

type SystemGeneratorSchema = {
    [K in keyof typeof SystemEnum]: {
        chance: number,
        color: string,
        controlledByChance: {
            [K in keyof typeof systemControlledByEnum]?: number
        },
        planets: {
            min: number,
            max: number,
            chance: {
                [K in keyof typeof BiomeEnum]: number
            }
        },
        resourcesMultiplier: {
            [K in keyof typeof ResourceEnum]?: number
        }
    }
}

export default SystemGeneratorSchema