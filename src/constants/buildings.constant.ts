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
        canProduce: {
            OIL: {
                perHour: 50,
                requirements: {
                    CARBON: 1,
                    HYDROGEN: 4
                }
            },
            WATER: {
                perHour: 50,
                requirements: {
                    HYDROGEN: 2,
                    OXYGEN: 1
                }
            },
            DIAMOND: {
                perHour: 5,
                requirements: {
                    CARBON: 50
                }
            },
            STAINLESS_STEEL: {
                perHour: 40,
                requirements: {
                    IRON: 1
                }
            }
        }
    },
    ORE_MINE: {
        name: 'рудник',
        buildResources: {
            FRAME: 20,
            SHEATHING: 5
        },
        canProduce: {
            STONE: {
                perHour: 500
            },
            ALUMINIUM: {
                perHour: 200
            }
        }
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
        canProduce: {
            LIFE: {
                perHour: 100,
                requirements: {
                    WATER: 20,
                    OXYGEN: 10
                }
            }
        }
    },
    WORKERS_MODULE: {
        name: 'жилой модуль',
        buildResources: {
            COMPOSITE_SHEATHING: 50,
            COMPOSITE_FRAME: 25,
            ALUMINIUM: 500,
            PLASTIC: 250,
            CONCRETE: 300
        },
        canProduce: {
            WORKER: {
                perHour: 50,
                requirements: {
                    LIFE: 50
                }
            }
        }
    },
    STORAGE: {
        name: 'хранилище',
        buildResources: {
            CONCRETE: 500,
            COMPOSITE_FRAME: 50,
            COMPOSITE_SHEATHING: 100,
            ALUMINIUM: 100
        },
        canProduce: {}
    },
    FARM_MODULE: {
        name: 'ферма',
        canProduce: {
            FOOD: {
                perHour: 120,
                requirements: {
                    WATER: 40,
                    WORKER: 40
                }
            }
        },
        buildResources: {
            CONCRETE: 50,
            COMPOSITE_SHEATHING: 25,
            COMPOSITE_FRAME: 10,
            SOLAR_LAMP: 1
        }
    },
    ASSEMBLY_MODULE: {
        name: 'сборочный модуль',
        canProduce: {
            INTERSTELLAR_SCANNER: {
                perHour: 3,
                requirements: {
                    CIRCUIT: 1,
                    RADIO_EMITTER: 4,
                    RADIO_CONSUMER: 1
                }
            }
        },
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
        canProduce: {
            ENERGY: {
                perHour: 540,
                requirements: {
                    URANIUM: 30
                }
            }
        },
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
        canProduce: {},
        buildResources: {}
    },
    MAINTAIN_MODULE: {
        name: 'модуль обслуживания колонии',
        buildResources: {
            COMPOSITE_SHEATHING: 20,
            COMPOSITE_FRAME: 10,
            CONCRETE: 50,
            MACHINE: 1
        },
        canProduce: {}
    },
    TELEPORT_MODULE: {
        name: 'модуль телепортации предметов',
        canProduce: {},
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
        },
        canProduce: {}
    },
    THERMOREGULATION_MODULE: {
        name: 'модуль терморегуляции',
        buildResources: {
            CONCRETE: 10,
            COMPOSITE_SHEATHING: 5,
            COMPOSITE_FRAME: 2,
            COMPUTER: 1,
            ALUMINIUM: 20
        },
        canProduce: {}
    },
    CENTRAL_MODULE: {
        name: 'центральный модуль',
        canProduce: {},
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
        },
        canProduce: {}
    },
    RADIATION_CLEANER_MODULE: {
        name: 'модуль очистки от радиации',
        buildResources: {
            COMPOSITE_SHEATHING: 5,
            COMPOSITE_FRAME: 2,
            CONCRETE: 10,
            LEAD: 50,
            WATER_TANK: 3
        },
        canProduce: {}
    },
    TOXICITY_CLEANER_MODULE: {
        name: 'модуль очистки от токсинов',
        canProduce: {},
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
        },
        canProduce: {}
    },
    WATER_CLEANING_MODULE: {
        name: 'модуль очистки воды',
        canProduce: {},
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
        },
        canProduce: {}
    }
}

export default BuildingsConstant