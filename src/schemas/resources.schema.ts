import ResourceEnum from "../enums/resource.enum";

type ResourcesSchema = {
    [K in keyof typeof ResourceEnum]: {
        name: string,
        starShipConsumable?: boolean,
        description: string,
        size: 's' | 'm' | 'l' | 'xl',
        craft?: {
            [K in keyof typeof ResourceEnum]?: number
        },
        craftModuleRequired?: ResourceEnum[],
        baseExtraction?: number
    }
}

export default ResourcesSchema