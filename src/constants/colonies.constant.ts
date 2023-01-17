import colonyConstantSchema from "../schemas/colonyConstant.schema";
import BuildingsEnum from "../enums/buildings.enum";

const ColoniesConstant: colonyConstantSchema = {
    LUSH: {
        baseModulesRequired: [
            BuildingsEnum.STORAGE,
            BuildingsEnum.WORKERS_MODULE,
            BuildingsEnum.LIVING_MODULE,
            BuildingsEnum.ENERGY_MODULE,
            BuildingsEnum.COMMUNICATION_MODULE,
            BuildingsEnum.CENTRAL_MODULE
        ]
    },
    WATER: {
        baseModulesRequired: [
            BuildingsEnum.WATER_FLOAT_MODULE,
            BuildingsEnum.STORAGE,
            BuildingsEnum.WORKERS_MODULE,
            BuildingsEnum.LIVING_MODULE,
            BuildingsEnum.ENERGY_MODULE,
            BuildingsEnum.COMMUNICATION_MODULE,
            BuildingsEnum.CENTRAL_MODULE,
            BuildingsEnum.THERMOREGULATION_MODULE
        ]
    },
    RADIATED: {
        baseModulesRequired: [
            BuildingsEnum.STORAGE,
            BuildingsEnum.WORKERS_MODULE,
            BuildingsEnum.LIVING_MODULE,
            BuildingsEnum.ENERGY_MODULE,
            BuildingsEnum.COMMUNICATION_MODULE,
            BuildingsEnum.CENTRAL_MODULE,
            BuildingsEnum.THERMOREGULATION_MODULE,
            BuildingsEnum.RADIATION_CLEANER_MODULE
        ]
    },
    SCORCHED: {
        baseModulesRequired: [
            BuildingsEnum.STORAGE,
            BuildingsEnum.WORKERS_MODULE,
            BuildingsEnum.LIVING_MODULE,
            BuildingsEnum.ENERGY_MODULE,
            BuildingsEnum.COMMUNICATION_MODULE,
            BuildingsEnum.CENTRAL_MODULE,
            BuildingsEnum.THERMOREGULATION_MODULE
        ]
    },
    BARREN: {
        baseModulesRequired: [
            BuildingsEnum.STORAGE,
            BuildingsEnum.WORKERS_MODULE,
            BuildingsEnum.LIVING_MODULE,
            BuildingsEnum.ENERGY_MODULE,
            BuildingsEnum.COMMUNICATION_MODULE,
            BuildingsEnum.CENTRAL_MODULE,
            BuildingsEnum.THERMOREGULATION_MODULE
        ]
    },
    DEAD: {
        baseModulesRequired: [
            BuildingsEnum.STORAGE,
            BuildingsEnum.WORKERS_MODULE,
            BuildingsEnum.LIVING_MODULE,
            BuildingsEnum.ENERGY_MODULE,
            BuildingsEnum.COMMUNICATION_MODULE,
            BuildingsEnum.CENTRAL_MODULE,
            BuildingsEnum.THERMOREGULATION_MODULE
        ]
    },
    MARSH: {
        baseModulesRequired: [
            BuildingsEnum.STORAGE,
            BuildingsEnum.WORKERS_MODULE,
            BuildingsEnum.LIVING_MODULE,
            BuildingsEnum.ENERGY_MODULE,
            BuildingsEnum.COMMUNICATION_MODULE,
            BuildingsEnum.CENTRAL_MODULE,
            BuildingsEnum.THERMOREGULATION_MODULE
        ]
    },
    ICY: {
        baseModulesRequired: [
            BuildingsEnum.STORAGE,
            BuildingsEnum.WORKERS_MODULE,
            BuildingsEnum.LIVING_MODULE,
            BuildingsEnum.ENERGY_MODULE,
            BuildingsEnum.COMMUNICATION_MODULE,
            BuildingsEnum.CENTRAL_MODULE,
            BuildingsEnum.THERMOREGULATION_MODULE
        ]
    },
    EXOTIC: {
        baseModulesRequired: [
            BuildingsEnum.STORAGE,
            BuildingsEnum.WORKERS_MODULE,
            BuildingsEnum.LIVING_MODULE,
            BuildingsEnum.ENERGY_MODULE,
            BuildingsEnum.COMMUNICATION_MODULE,
            BuildingsEnum.CENTRAL_MODULE
        ]
    },
    GAS: {
        baseModulesRequired: [
            BuildingsEnum.STORAGE,
            BuildingsEnum.WORKERS_MODULE,
            BuildingsEnum.LIVING_MODULE,
            BuildingsEnum.ENERGY_MODULE,
            BuildingsEnum.COMMUNICATION_MODULE,
            BuildingsEnum.CENTRAL_MODULE,
            BuildingsEnum.THERMOREGULATION_MODULE,
            BuildingsEnum.LOW_ORBIT_ENGINE_MODULE
        ]
    },
    TOXIC: {
        baseModulesRequired: [
            BuildingsEnum.STORAGE,
            BuildingsEnum.WORKERS_MODULE,
            BuildingsEnum.LIVING_MODULE,
            BuildingsEnum.ENERGY_MODULE,
            BuildingsEnum.COMMUNICATION_MODULE,
            BuildingsEnum.CENTRAL_MODULE,
            BuildingsEnum.THERMOREGULATION_MODULE,
            BuildingsEnum.TOXICITY_CLEANER_MODULE
        ]
    },
    VOLCANIC: {
        baseModulesRequired: [
            BuildingsEnum.STORAGE,
            BuildingsEnum.WORKERS_MODULE,
            BuildingsEnum.LIVING_MODULE,
            BuildingsEnum.ENERGY_MODULE,
            BuildingsEnum.COMMUNICATION_MODULE,
            BuildingsEnum.CENTRAL_MODULE,
            BuildingsEnum.THERMOREGULATION_MODULE
        ]
    }
}

export default ColoniesConstant