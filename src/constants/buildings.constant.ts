import BuildingGeneratorSchema from "../schemas/buildingGenerator.schema";

const BuildingsConstant: BuildingGeneratorSchema = {
    LIVING_MODULE: {
        name: 'модуль жизнеобеспечения',
        buildResources: {
            OXYGEN_TANK: 2,
            WATER_TANK: 5,
            COMPOSITE_FRAME: 20,
            COMPOSITE_SHEATHING: 20,
            COMPUTER: 2,
            WIRING: 5,
            CONCRETE: 150
        },
        canProduce: []
    },
    WORKERS_MODULE: {
        name: 'жилой модуль',
        buildResources: {
            COMPOSITE_SHEATHING: 50,
            COMPOSITE_FRAME: 25,
            ALUMINIUM: 500,
            PLASTIC: 250,
            CONCRETE: 300,
            GLASS_PANEL: 5
        },
        canProduce: []
    },
    STORAGE: {
        name: 'хранилище',
        buildResources: {
            CONCRETE: 500,
            COMPOSITE_FRAME: 50,
            COMPOSITE_SHEATHING: 100,
            ALUMINIUM: 100
        }
    },
    FARM_MODULE: {
        name: 'ферма',
        canProduce: [],
        buildResources: {
            CONCRETE: 50,
            COMPOSITE_SHEATHING: 25,
            COMPOSITE_FRAME: 10,
            SOLAR_LAMP: 1
        }
    },
    ENERGY_MODULE: {
        name: 'энергомодуль',
        canProduce: [],
        buildResources: {
            CONCRETE: 200,
            WATER_TANK: 10,
            NUCLEAR_FUEL: 50,
            LEAD: 25,
            COMPUTER: 5,
            COMPOSITE_FRAME: 20,
            COMPOSITE_SHEATHING: 50
        }
    },
    MAINTAIN_MODULE: {
        name: 'модуль обслуживания колонии',
        buildResources: {
            COMPOSITE_SHEATHING: 20,
            COMPOSITE_FRAME: 10,
            CONCRETE: 50,
            MACHINE: 1
        }
    },
    THERMOREGULATION_MODULE: {
        name: 'модуль терморегуляции',
        buildResources: {
            CONCRETE: 10,
            COMPOSITE_SHEATHING: 5,
            COMPOSITE_FRAME: 2,
            COMPUTER: 1,
            ALUMINIUM: 20
        }
    },
    CENTRAL_MODULE: {
        name: 'центральный модуль',
        buildResources: {
            COMPUTER: 5,
            CONCRETE: 50,
            WIRING: 10,
            COMPOSITE_FRAME: 5,
            COMPOSITE_SHEATHING: 10
        }
    },
    COMMUNICATION_MODULE: {
        name: 'модуль связи',
        buildResources: {
            COMPUTER: 1,
            COMPOSITE_SHEATHING: 5,
            COMPOSITE_FRAME: 2,
            CONCRETE: 10,
            WIRING: 5,
            RADIO_CONSUMER: 5,
            RADIO_EMITTER: 5
        }
    },
    RADIATION_CLEANER_MODULE: {
        name: 'модуль очистки от радиации',
        buildResources: {
            COMPOSITE_SHEATHING: 5,
            COMPOSITE_FRAME: 2,
            CONCRETE: 10,
            LEAD: 50,
            WATER_TANK: 3
        }
    },
    TOXICITY_CLEANER_MODULE: {
        name: 'модуль фильтрации токсинов',
        buildResources: {
            COMPOSITE_SHEATHING: 5,
            COMPOSITE_FRAME: 2,
            CONCRETE: 10,
            WATER_TANK: 3
        }
    },
    WATER_FLOAT_MODULE: {
        name: 'модуль поддержки плавучести',
        buildResources: {
            EMPTY_TANK: 10,
            COMPOSITE_FRAME: 5
        }
    },
    LOW_ORBIT_ENGINE_MODULE: {
        name: 'низкоорбитальный двигатель',
        buildResources: {
            COMPOSITE_FRAME: 20,
            GRAVITINO_BALL: 5
        }
    }
}

export default BuildingsConstant