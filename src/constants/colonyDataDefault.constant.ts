import ColonySchema from "../schemas/colony.schema";
import systemSchema from "../schemas/system.schema";
import BuildingSchema from "../schemas/building.schema";
import ColoniesConstant from "./colonies.constant";
import BuildingsConstant from "./buildings.constant";
import colonyNameGenerator from "../generators/colonyName.generator";

const colonyDataDefaultConstant = (system: systemSchema, planet: number, owner: string): ColonySchema => {
    const biome = system.planets[planet].biome
    const modules: BuildingSchema[] = ColoniesConstant[biome].baseModulesRequired.map(x => ({
        module_name: x,
        completed: false,
        resourcesRequired: BuildingsConstant[x].buildResources,
        level: 0,
        maintain: 0
    }))


    return {
        modules,
        owner,
        storage: {},
        coordinates: {
            system: system.coordinates,
            planetIndex: planet
        },
        name: colonyNameGenerator(system.coordinates + planet.toString())
    }
}

export default colonyDataDefaultConstant