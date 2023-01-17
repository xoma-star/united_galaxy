import PlanetCoordinatesSchema from "./planetCoordinates.schema";
import ResourceEnum from "../enums/resource.enum";
import BuildingSchema from "./building.schema";

interface ColonySchema {
    coordinates: PlanetCoordinatesSchema,
    name: string,
    owner: string,
    id?: string,
    storage: {
        [K in keyof typeof ResourceEnum]?: number
    },
    modules: BuildingSchema[]

}

export default ColonySchema