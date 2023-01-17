import BiomeEnum from "../enums/biome.enum";
import BuildingsEnum from "../enums/buildings.enum";

type ColonyConstantSchema = {
    [K in keyof typeof BiomeEnum]: {
        baseModulesRequired: BuildingsEnum[]
    }
}

export default ColonyConstantSchema