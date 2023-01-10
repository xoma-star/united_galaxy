import ResourceEnum from "../enums/resource.enum";
import BuildingsEnum from "../enums/buildings.enum";

interface CraftRequirementSchema {
    building: BuildingsEnum,
    resources: {
        [K in keyof typeof ResourceEnum]?: number
    }
}

export default CraftRequirementSchema