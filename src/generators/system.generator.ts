import SystemSchema from "../schemas/system.schema";
import SystemGeneratorConstant from "../constants/systemGenerator.constant";
import weighted_random from "../misc/weighted_random";
import systemEnum from "../enums/system.enum";
import systemControlledByEnum from "../enums/systemControlledBy.enum";
import systemNameGenerator from "./system.name.generator";
import { v4 as uuidv4 } from 'uuid'
import planetSchema from "../schemas/planet.schema";
import planetGenerator from "./planet.generator";

const systemGenerator = (): SystemSchema => {
    const id = uuidv4()
    const systemType: systemEnum = weighted_random<systemEnum>(
        (Object.keys(SystemGeneratorConstant) as (keyof typeof SystemGeneratorConstant)[])
        .reduce((a, v) => ({
            ...a,
            [v]: SystemGeneratorConstant[v].chance
        }), {})
    )
    const control = SystemGeneratorConstant[systemType as unknown as keyof typeof systemEnum]

    const systemControlledBy = weighted_random<systemControlledByEnum>(
        (Object.keys(control.controlledByChance) as (keyof typeof control.controlledByChance)[])
            .reduce((a, v) => ({
                ...a,
                [v]: control.controlledByChance[v]
            }), {})
    )

    const name = systemNameGenerator()
    const planets: planetSchema[] = []
    const planetsCountInterval = [
        SystemGeneratorConstant[systemType as unknown as keyof typeof systemEnum].planets.min,
        SystemGeneratorConstant[systemType as unknown as keyof typeof systemEnum].planets.max
    ]

    for(
        let i = planetsCountInterval[0];
        i < planetsCountInterval[0] + Math.round(Math.random() * (planetsCountInterval[1] - planetsCountInterval[0]));
        i++
    ) planets.push(planetGenerator(systemType, id))

    return {
        planets: planets,
        blackHole: true,
        controlledBy: systemControlledBy,
        coordinates: {
            x: Math.round(Math.random() * 32 - 16),
            y: Math.round(Math.random() * 32 - 16),
            z: Math.round(Math.random() * 32 - 16)
        },
        name: name,
        type: systemType,
        id,
        tradingMultiplier: 1,
        discovered: 0,
        discoverer: '',
        sector: 'W1H1D1'
    }
}

export default systemGenerator