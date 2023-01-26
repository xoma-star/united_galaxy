import PlanetCoordinatesSchema from "./planetCoordinates.schema";
import ResourceEnum from "../enums/resource.enum";
import BuildingSchema from "./building.schema";
import UserDataSchema from "./userData.schema";

interface ColonySchema {
    coordinates: PlanetCoordinatesSchema,
    name: string,
    owner: string,
    id?: string,
    storage: {
        [K in keyof typeof ResourceEnum]?: number
    },
    modules: BuildingSchema[],
    expand?: {
        owner: UserDataSchema
    },
    extractingResource: ResourceEnum | null
}

export default ColonySchema