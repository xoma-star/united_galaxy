import ResourceEnum from "../enums/resource.enum";

type ResourcesSchema = {
    [K in keyof typeof ResourceEnum]: {
        name: string,
        starShipConsumable?: boolean,
        description: string,
        size: 's' | 'm' | 'l' | 'xl'
    }
}

export default ResourcesSchema