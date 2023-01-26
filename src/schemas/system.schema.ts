import systemEnum from "../enums/system.enum";
import SystemControlledByEnum from "../enums/systemControlledBy.enum";
import planetSchema from "./planet.schema";

interface SystemSchema {
    id: string,
    name: string,
    coordinates: string,
    planets: planetSchema[],
    type: systemEnum,
    controlledBy: SystemControlledByEnum,
    tradingMultiplier: number,
    blackHole: boolean,
    discovered: number,
    discoverer: string,
    sector: string,
    resourcesMultiplier: number
}

export default SystemSchema