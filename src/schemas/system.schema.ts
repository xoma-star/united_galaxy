import systemEnum from "../enums/system.enum";
import SystemControlledByEnum from "../enums/systemControlledBy.enum";
import planetSchema from "./planet.schema";

interface SystemSchema {
    id: string,
    name: string,
    coordinates: {
        x: number,
        y: number,
        z: number
    },
    planets: planetSchema[],
    type: systemEnum,
    controlledBy: SystemControlledByEnum,
    tradingMultiplier: number,
    blackHole: boolean,
    discovered: number,
    discoverer: string,
    sector: string
}

export default SystemSchema