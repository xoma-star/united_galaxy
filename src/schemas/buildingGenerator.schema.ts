import BuildingsEnum from "../enums/buildings.enum";
import ResourceEnum from "../enums/resource.enum";

type BuildingGeneratorSchema = {
    [K in keyof typeof BuildingsEnum]: {
        name: string,
        buildResources: {
            [K in keyof typeof ResourceEnum]?: number
        },
        canProduce?: {
            requirements: {[K in keyof typeof ResourceEnum]?: number},
            product: {[K in keyof typeof ResourceEnum]?: number},
            productPerHour: number
        }[]
    }
}

export default BuildingGeneratorSchema