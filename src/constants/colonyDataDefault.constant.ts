import ColonySchema from "../schemas/colony.schema";
import systemSchema from "../schemas/system.schema";
import BuildingSchema from "../schemas/building.schema";
import ColoniesConstant from "./colonies.constant";
import BuildingsConstant from "./buildings.constant";
import colonyNameGenerator from "../generators/colonyName.generator";
import {sha512} from "js-sha512";

const colonyDataDefaultConstant = (system: systemSchema, planet: number, owner: string): ColonySchema => {
    const biome = system.planets[planet].biome
    const modules: BuildingSchema[] = ColoniesConstant[biome].baseModulesRequired.map(x => ({
        module_name: x,
        completed: false,
        resourcesRequired: BuildingsConstant[x].buildResources,
        level: 0,
        maintain: 0,
        id: sha512(x + Date.now().toString()).slice(0, 5)
    }))


    return {
        modules,
        owner,
        storage: {},
        coordinates: {
            system: system.coordinates,
            planetIndex: planet
        },
        name: colonyNameGenerator(system.coordinates + planet.toString()),
        extractingResource: null
    }
}

export default colonyDataDefaultConstant