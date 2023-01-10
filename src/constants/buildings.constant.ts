import BuildingGeneratorSchema from "../schemas/buildingGenerator.schema";

const BuildingsConstant: BuildingGeneratorSchema = {
    REFINER: {
        name: 'очиститель',
        buildResources: {
            TITANIUM: 10,
            STAINLESS_STEEL: 50,
            ALUMINIUM: 500
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
            ALUMINIUM: 400,
            STAINLESS_STEEL: 200,
            DIAMOND: 15
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
        buildResources: {},
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
        buildResources: {}
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
        buildResources: {}
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

        }
    },
    EXPEDITIONS_MODULE: {
        name: 'модуль экспедиций',
        canProduce: {

        },
        buildResources: {

        }
    },
    MAINTAIN_MODULE: {
        name: 'модуль обслуживания колонии',
        buildResources: {

        },
        canProduce: {}
    },
    TELEPORT_MODULE: {
        name: 'модуль телепортации предметов',
        canProduce: {},
        buildResources: {}
    },
    TRADING_MODULE: {
        name: 'модуль галактической торговли',
        buildResources: {

        },
        canProduce: {}
    }
}

export default BuildingsConstant