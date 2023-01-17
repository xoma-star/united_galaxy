import SystemSchema from "../schemas/system.schema";
import SystemGeneratorConstant from "../constants/systemGenerator.constant";
import weighted_random from "../misc/weighted_random";
import systemEnum from "../enums/system.enum";
import systemControlledByEnum from "../enums/systemControlledBy.enum";
import systemNameGenerator from "./system.name.generator";
import { v5 as uuidv5 } from 'uuid'
import planetSchema from "../schemas/planet.schema";
import planetGenerator from "./planet.generator";
import {sha512} from "js-sha512";
import seedrandom from "seedrandom";

const systemGenerator = (seed: string): SystemSchema => {
    seed = seed.toUpperCase()
    const id = uuidv5(seed, '30a76b50-a922-4bf8-848d-54a0ab3f2a05')
    const random = seedrandom(seed)
    const systemType: systemEnum = weighted_random<systemEnum>(
        (Object.keys(SystemGeneratorConstant) as (keyof typeof SystemGeneratorConstant)[])
        .reduce((a, v) => ({
            ...a,
            [v]: SystemGeneratorConstant[v].chance
        }), {}),
        seed
    )
    const control = SystemGeneratorConstant[systemType as unknown as keyof typeof systemEnum]

    const systemControlledBy = weighted_random<systemControlledByEnum>(
        (Object.keys(control.controlledByChance) as (keyof typeof control.controlledByChance)[])
            .reduce((a, v) => ({
                ...a,
                [v]: control.controlledByChance[v]
            }), {}),
        seed
    )

    const name = systemNameGenerator(seed)
    const planets: planetSchema[] = []
    const planetsCountInterval = [
        SystemGeneratorConstant[systemType as unknown as keyof typeof systemEnum].planets.min,
        SystemGeneratorConstant[systemType as unknown as keyof typeof systemEnum].planets.max
    ]

    for(
        let i = planetsCountInterval[0];
        i < planetsCountInterval[0] + Math.round(random() * (planetsCountInterval[1] - planetsCountInterval[0]));
        i++
    ) planets.push(planetGenerator(systemType, id, sha512(`${seed} planet ${i}`)))

    return {
        planets: planets,
        blackHole: true,
        controlledBy: systemControlledBy,
        coordinates: seed.toUpperCase(),
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