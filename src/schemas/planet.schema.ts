import biomeEnum from "../enums/biome.enum";
import landscapeEnum from "../enums/landscape.enum";
import resourceEnum from "../enums/resource.enum";
import planetCoordinatesSchema from "./planetCoordinates.schema";
import LivingFormEnum from "../enums/livingForm.enum";

interface PlanetSchema {
    id: string,
    systemId: string,
    name: string,
    biome: biomeEnum,
    surface: landscapeEnum,
    resources: resourceEnum[],
    floraLevel: number,
    faunaLevel: number,
    settlements: planetCoordinatesSchema[],
    difficulty: number,
    tradingPosts: planetCoordinatesSchema[],
    colonies: planetCoordinatesSchema[],
    temperature: number
    atmosphereLevel: number,
    livingForm: LivingFormEnum
}

export default PlanetSchema