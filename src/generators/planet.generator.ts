import systemEnum from "../enums/system.enum";
import weighted_random from "../misc/weighted_random";
import SystemGeneratorConstant from "../constants/systemGenerator.constant";
import planetSchema from "../schemas/planet.schema";
import biomeEnum from "../enums/biome.enum";
import LivingFormEnum from "../enums/livingForm.enum";
import BiomeConstant from "../constants/biome.constant";
import landscapeEnum from "../enums/landscape.enum";
import normalDistribution from "../misc/normalDistribution";
import { v5 as uuidv5 } from 'uuid'
import ResourceEnum from "../enums/resource.enum";
import seedrandom from 'seedrandom'

const planetGenerator = (systemType: systemEnum, systemId: string, seed: string): planetSchema => {
    seed = seed.toUpperCase()
    const random = seedrandom(seed)
    const system = SystemGeneratorConstant[systemType as unknown as keyof typeof systemEnum]
    const biome = weighted_random<biomeEnum>(
        (Object.keys(system.planets.chance) as (keyof typeof system.planets.chance)[])
            .reduce((a, v) => ({
                ...a,
                [v]: system.planets.chance[v]
            }), {}),
        seed
    )
    const biomeStat = BiomeConstant[biome as unknown as keyof typeof biomeEnum]
    const surfaceChance = biomeStat.possibleSurfaces
    const surface = weighted_random<landscapeEnum>(
        (Object.keys(surfaceChance) as (keyof typeof surfaceChance)[])
            .reduce((a, v) => ({
                ...a,
                [v]: surfaceChance[v]
            }), {}),
        seed
    )

    const floraLevel = Math.round((normalDistribution(seed) - 0.5) * (biomeStat.floraLevel.max - biomeStat.floraLevel.min) + biomeStat.floraLevel.average)
    const faunaLevel = floraLevel > 0 ?
        Math.round((normalDistribution(seed) - 0.5) * (biomeStat.faunaLevel.max - biomeStat.faunaLevel.min) + biomeStat.faunaLevel.average)
        : 0
    const atmosphereLevel = floraLevel / 5 + random() / 10
    const temperatureLevel = Math.round(
        (normalDistribution(seed) - 0.5) * (biomeStat.temperature.max - biomeStat.temperature.min) + biomeStat.temperature.average
    )

    const resources: ResourceEnum[] = [];
    (Object.keys(biomeStat.possibleResources) as (keyof typeof biomeStat.possibleResources)[]).forEach(k => {
        if(1 - random() > (biomeStat.possibleResources[k] || 1)) resources.push(k as ResourceEnum)
    })

    return {
        biome,
        systemId,
        name: '',
        atmosphereLevel,
        colonies: [],
        difficulty: 1,
        faunaLevel,
        floraLevel,
        id: uuidv5(seed, 'd5d73110-9f0d-4727-9e0d-098699c8682d'),
        livingForm: LivingFormEnum.CARBON,
        resources,
        temperature: temperatureLevel,
        settlements: [],
        surface,
        tradingPosts: []
    }
}

export default planetGenerator