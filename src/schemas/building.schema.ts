import ResourceEnum from "../enums/resource.enum";
import BuildingsEnum from "../enums/buildings.enum";

interface BuildingSchema {
    module_name: BuildingsEnum,
    maintain: number,
    level: number,
    resourcesRequired: {
        [K in keyof typeof ResourceEnum]?: number
    },
    completed: boolean
}

export default BuildingSchema