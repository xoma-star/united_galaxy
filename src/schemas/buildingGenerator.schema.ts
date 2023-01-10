import BuildingsEnum from "../enums/buildings.enum";
import ResourceEnum from "../enums/resource.enum";

type BuildingGeneratorSchema = {
    [K in keyof typeof BuildingsEnum]: {
        name: string,
        buildResources: {
            [K in keyof typeof ResourceEnum]?: number
        },
        canProduce: {
            [K in keyof typeof ResourceEnum]?: {
                perHour: number,
                requirements?: {
                    [K in keyof typeof ResourceEnum]?: number
                }
            }
        }
    }
}

export default BuildingGeneratorSchema