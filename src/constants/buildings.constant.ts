import BuildingGeneratorSchema from "../schemas/buildingGenerator.schema";

const BuildingsConstant: BuildingGeneratorSchema = {
    REFINER: {
        name: 'очиститель',
        buildResources: {
            COMPOSITE_SHEATHING: 20,
            COMPOSITE_FRAME: 15,
            EMPTY_TANK: 5,
            IRIDIUM: 5,
            DIAMOND: 1,
            COMPUTER: 1,
            WIRING: 10,
            CONCRETE: 100
        },
        canProduce: [
            {product: {OIL: 1}, requirements: {CARBON: 4, HYDROGEN: 1, WORKER: 1}, productPerHour: 120}
        ]
    },
    ORE_MINE: {
        name: 'рудник',
        buildResources: {
            FRAME: 20,
            SHEATHING: 5
        },
        canProduce: [
            {product: {ALUMINIUM: 1}, requirements: {WORKER: 0.1}, productPerHour: 200},
            {product: {STONE: 1}, requirements: {WORKER: 0.1}, productPerHour: 800}
        ]
    },
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
        canProduce: [
            {product: {LIFE: 1}, requirements: {WATER: 1, OXYGEN: 1, FOOD: 1}, productPerHour: 50}
        ]
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
        canProduce: [
            {product: {WORKER: 1}, requirements: {LIFE: 1}, productPerHour: 50}
        ]
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
        canProduce: [
            {product: {OXYGEN: 1, FOOD: 2, SEEDS: 1}, requirements: {WORKER: 1, SEEDS: 1, WATER: 2}, productPerHour: 50}
        ],
        buildResources: {
            CONCRETE: 50,
            COMPOSITE_SHEATHING: 25,
            COMPOSITE_FRAME: 10,
            SOLAR_LAMP: 1
        }
    },
    ASSEMBLY_MODULE: {
        name: 'сборочный модуль',
        canProduce: [],
        buildResources: {
            CONCRETE: 100,
            COMPOSITE_SHEATHING: 50,
            COMPOSITE_FRAME: 30,
            MACHINE: 2,
            COMPUTER: 1
        }
    },
    ENERGY_MODULE: {
        name: 'энергомодуль',
        canProduce: [
            {product: {ENERGY: 1}, requirements: {WORKER: 1, URANIUM: 0.05}, productPerHour: 500}
        ],
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
    EXPEDITIONS_MODULE: {
        name: 'модуль экспедиций',
        canProduce: [],
        buildResources: {}
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
    TELEPORT_MODULE: {
        name: 'модуль телепортации предметов',
        buildResources: {
            CONCRETE: 75,
            COMPOSITE_FRAME: 10,
            COMPOSITE_SHEATHING: 25,
            ANTIMATTER: 5,
            COMPUTER: 10
        }
    },
    TRADING_MODULE: {
        name: 'модуль галактической торговли',
        buildResources: {
            CONCRETE: 50,
            COMPOSITE_FRAME: 25,
            COMPOSITE_SHEATHING: 10,
            COMPUTER: 1,
            RADIO_EMITTER: 3,
            RADIO_CONSUMER: 3,
            WIRING: 10
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
    WATER_CLEANING_MODULE: {
        name: 'модуль очистки воды',
        canProduce: [
            {product: {WATER: 1}, requirements: {WORKER: 0.1}, productPerHour: 50}
        ],
        buildResources: {
            WATER_TANK: 5,
            COMPOSITE_FRAME: 5,
            COMPOSITE_SHEATHING: 10,
            COMPUTER: 1,
            CARBON: 50,
            SEAWEED: 50
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