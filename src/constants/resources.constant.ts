import ResourcesSchema from "../schemas/resources.schema";
import resourceEnum from "../enums/resource.enum";

const ResourcesConstant: ResourcesSchema = {
    AMMONIA: {
        name: 'аммиак',
        description: 'бесцветный газ с резким характерным запахом',
        size: "m",
        baseExtraction: 120
    },
    STONE: {
        name: 'камень',
        description: 'каменная порода. преобладает в составе большинства планет',
        size: 'm',
        baseExtraction: 200
    },
    WATER: {
        name: 'вода',
        description: 'жидкость, необходимая для поддержания жизни в колониях',
        size: 'm',
        baseExtraction: 240
    },
    HELIUM: {
        name: 'гелий',
        description: 'бесцветный газ',
        size: 'm',
        baseExtraction: 500
    },
    NITROGEN: {
        name: 'азот',
        description: 'бесцветный газ',
        size: 'm',
        baseExtraction: 400
    },
    SODIUM: {
        name: 'натрий',
        description: 'мягкий металл',
        size: 's',
        baseExtraction: 40
    },
    HYDROGEN: {
        name: 'водород',
        description: 'самый распространенный элемент во вселенной',
        size: 'm',
        baseExtraction: 600
    },
    BASALT: {
        name: 'базальт',
        description: 'вулканическая горная порода',
        size: 'l',
        baseExtraction: 200
    },
    GOLD: {
        name: 'золото',
        description: 'драгоценный металл',
        size: 's',
        baseExtraction: 20
    },
    CHLORINE: {
        name: 'хлор',
        description: 'ядовитый газ',
        size: 'm',
        baseExtraction: 80
    },
    CADMIUM: {
        name: 'кадмий',
        description: 'мягкий ковкий тягучий металл серебристо-белого цвета',
        size: 's',
        baseExtraction: 15
    },
    LIQUID_SUN: {
        name: 'жидкая звезда',
        description: 'частичка звезды. может производить много энергии',
        size: 's',
        baseExtraction: 2
    },
    URANIUM: {
        name: 'уран',
        description: 'радиоактивный металл',
        size: 's',
        baseExtraction: 40
    },
    INDIUM: {
        name: 'индий',
        description: 'очень мягкий металл серебристо-белого цвета',
        size: 's',
        baseExtraction: 15
    },
    FROST_CRYSTAL: {
        name: 'морозный кристал',
        description: 'кристалл, образованный в естественной среде при низких температурах',
        size: 'm',
        baseExtraction: 10
    },
    COPPER: {
        name: 'медь',
        description: 'мягкий, ковкий и пластичный металл с очень высокой тепло- и электропроводностью',
        size: 'm',
        baseExtraction: 90
    },
    DEUTERIUM: {
        name: 'дейтерий',
        description: 'стабильный изотоп водорода с атомной массой, равной 2',
        size: 'm',
        baseExtraction: 120
    },
    IRON: {
        name: 'железо',
        description: 'ковкий переходный металл серебристо-белого цвета с высокой химической реакционной способностью',
        size: 'm',
        baseExtraction: 120
    },
    STONE_DUST: {
        name: 'каменная пыль',
        description: 'каменная пыль',
        size: 's',
        baseExtraction: 800
    },
    OXYGEN: {
        name: 'кислород',
        description: 'при нормальных условиях — газ без цвета, вкуса и запаха',
        size: 'm',
        baseExtraction: 400
    },
    CARBON: {
        name: 'углерод',
        description: 'основа органической жизни',
        size: 'l',
        baseExtraction: 400
    },
    ASH: {
        name: 'пепел',
        description: 'результат сгорания',
        size: 'l',
        baseExtraction: 120
    },
    COBALT: {
        name: 'кобальт',
        description: 'серебристо-белый, слегка желтоватый переходный металл с розоватым или синеватым отливом',
        size: 'm',
        baseExtraction: 50
    },
    CONDENSED_CARBON: {
        name: 'сжатый углерод',
        description: 'углерод, у которого снижено расстояние между атомами',
        size: 'm',
        craft: {
            CARBON: 2
        },
        craftModuleRequired: [resourceEnum.PORTABLE_REFINER]
    },
    CONDENSED_OXYGEN: {
        name: 'сжатый кислород',
        description: 'кислород, у которого снижено расстояние между атомами',
        size: 'm',
        craft: {
            OXYGEN: 2
        },
        craftModuleRequired: [resourceEnum.PORTABLE_REFINER]
    },
    DIAMOND: {
        name: 'алмаз',
        description: 'сверхпрочный минерал, образованный из углерода',
        size: 's',
        craft: {
            CARBON: 50,
        },
        baseExtraction: 5,
        craftModuleRequired: [resourceEnum.PORTABLE_REFINER]
    },
    IRON_DUST: {
        name: 'железная пыль',
        description: 'остаток от обработки железа',
        size: 'm'
    },
    PHOSPHORUS: {
        name: 'фосфор',
        description: 'фосфор',
        size: 's',
        baseExtraction: 40
    },
    PLATINUM: {
        name: 'платина',
        description: 'платина',
        size: "m",
        baseExtraction: 10
    },
    PYRITE: {
        name: 'пирит',
        description: 'пирит',
        size: "m",
        baseExtraction: 60
    },
    QUARTZ: {
        name: 'кварц',
        description: 'кварц',
        size: 's',
        baseExtraction: 30
    },
    RADON: {
        name: 'радон',
        description: 'радон',
        size: 'l',
        baseExtraction: 90
    },
    SALT: {
        name: 'соль',
        description: 'соединение натрия и хлора',
        size: 'm',
        baseExtraction: 140
    },
    SILICON: {
        name: 'кремний',
        description: 'кремний',
        size: 'm',
        baseExtraction: 70
    },
    SILVER: {
        name: 'серебро',
        description: 'серебро',
        size: 'm',
        baseExtraction: 15
    },
    TRITIUM: {
        name: 'тритий',
        description: 'тритий',
        size: 's',
        baseExtraction: 30
    },
    SOIL: {
        name: 'почва',
        description: 'почва',
        size: 'l',
        baseExtraction: 120
    },
    ALUMINIUM: {
        name: 'алюминий',
        description: 'алюминий',
        size: 'm',
        baseExtraction: 200
    },
    LEAD: {
        name: 'свинец',
        description: 'свинец',
        size: 'm',
        baseExtraction: 80
    },
    OIL: {
        name: 'углеводороды',
        description: 'углеводороды',
        size: 'm',
        craft: {
            CARBON: 4,
            HYDROGEN: 1
        },
        baseExtraction: 80,
        craftModuleRequired: [resourceEnum.PORTABLE_REFINER]
    },
    GLASS_WOOL: {
        name: 'стекловата',
        description: 'хороший утеплитель',
        size: 'm'
    },
    PLASTIC: {
        name: 'полимеры',
        description: 'получается из углеводородов',
        size: 'l',
        craft: {
            OIL: 5
        },
        craftModuleRequired: [resourceEnum.PORTABLE_REFINER]
    },
    STAINLESS_STEEL: {
        name: 'закаленная сталь',
        description: 'закаленная сталь',
        size: 'm',
        craft: {
            IRON: 3,
            CARBON: 2
        },
        craftModuleRequired: [resourceEnum.PORTABLE_REFINER]
    },
    TITANIUM: {
        name: 'титан',
        description: 'металл',
        size: 's',
        baseExtraction: 40
    },
    CIRCUIT: {
        name: 'электросхема',
        description: 'распечатанная плата, позволяющая управлять электроникой',
        size: 's',
        craft: {
            COPPER: 5,
            ALUMINIUM: 40
        }
    },
    RADIO_CONSUMER: {
        name: 'приемник радиоволн',
        description: 'принимает радиоволны. эффективен в космосе',
        size: 'l',
        craft: {
            ALUMINIUM: 20,
            ANTENNA: 1,
            CIRCUIT: 2
        }
    },
    RADIO_EMITTER: {
        name: 'излучатель радиоволн',
        description: 'излучает радиоволны. эффективен в космосе',
        size: 'l',
        craft: {
            ALUMINIUM: 20,
            ANTENNA: 1,
            CIRCUIT: 2
        }
    },
    HYPER_FUEL: {
        name: 'гипертопливо',
        description: 'нужно для заправки варп-двигателя',
        size: 'l',
        craft: {
            ANTIMATTER: 5,
            TRITIUM: 50,
            HYDROGEN: 20,
            EMPTY_TANK: 1
        }
    },
    WARP_DRIVE: {
        name: 'варп-двигатель',
        description: 'нужен для перемещения между системами',
        starShipConsumable: true,
        size: 'xl',
        craft: {
            BEACON: 1,
            QUANTUM_COMPUTER: 1,
            TITANIUM: 100,
            COPPER: 20,
            PLASTIC: 10,
            RADON: 5,
            ION_BATTERY: 30
        },
        craftModuleRequired: [resourceEnum.PORTABLE_MACHINE]
    },
    COBALT_DRIVE: {
        name: 'кобальтовый привод',
        description: 'нужен для варпа в синие системы',
        starShipConsumable: true,
        size: 'l',
        craft: {
            WARP_DRIVE: 1,
            COBALT: 500,
            IRIDIUM: 200
        },
        craftModuleRequired: [resourceEnum.PORTABLE_MACHINE]
    },
    CADMIUM_DRIVE: {
        name: 'кадмиевый привод',
        description: 'нужен для варпа в красные системы',
        starShipConsumable: true,
        size: 'l',
        craft: {
            WARP_DRIVE: 1,
            CADMIUM: 500,
            IRIDIUM: 200
        },
        craftModuleRequired: [resourceEnum.PORTABLE_MACHINE]
    },
    INDIUM_DRIVE: {
        name: 'индиевый привод',
        description: 'нужен для варпа в зеленые системы',
        starShipConsumable: true,
        size: 'l',
        craft: {
            WARP_DRIVE: 1,
            INDIUM: 500,
            IRIDIUM: 200
        },
        craftModuleRequired: [resourceEnum.PORTABLE_MACHINE]
    },
    PLANET_SCANNER: {
        name: 'планетарный сканер',
        description: 'нужен для получения информации о планетах',
        starShipConsumable: true,
        size: 'l',
        craft: {
            ADVANCED_CIRCUIT: 1,
            RADIO_EMITTER: 1,
            RADIO_CONSUMER: 1
        }
    },
    IRIDIUM: {
        name: 'иридий',
        description: 'металл',
        size: 's',
        baseExtraction: 5
    },
    INSULATION: {
        name: 'утеплитель',
        description: 'вспененный материал, который позволяет сохранять тепло',
        size: 'l',
        craft: {
            PLASTIC: 80
        }
    },
    FUNGAL_MOULD: {
        name: 'грибковая плесень',
        description: 'грибковая плесень',
        size: 's',
        baseExtraction: 40
    },
    SEEDS: {
        name: 'семена',
        description: 'посадить, полить, подождать',
        size: 'm',
        baseExtraction: 30
    },
    ANTIMATTER: {
        name: 'антиматерия',
        description: 'при контакте с материей уничтожается и выделяет огромное количество энергии',
        size: 's'
    },
    COMPOSITE_FRAME: {
        name: 'прочный каркас',
        size: 'l',
        description: 'легкий и прочный каркас',
        craft: {
            FRAME: 10,
            TITANIUM: 100
        }
    },
    COMPOSITE_SHEATHING: {
        name: 'композитная обшивка',
        size: 'l',
        description: 'устойчивая к внешним воздействиям обшивка. легко выдерживает самые тяжелые погодные условия',
        craft: {
            SHEATHING: 10,
            INSULATION: 40,
            TITANIUM: 80
        }
    },
    EMPTY_TANK: {
        name: 'пустой бак',
        description: 'пустой бак',
        size: 'l',
        craft: {
            ALUMINIUM: 50
        }
    },
    FRAME: {
        name: 'простой каркас',
        description: 'простой каркас',
        size: 'l',
        craft: {
            ALUMINIUM: 20,
            TITANIUM: 10
        }
    },
    OXYGEN_TANK: {
        name: 'кислородный бак',
        description: 'бак со сжиженным кислородом',
        size: 'l',
        craft: {
            EMPTY_TANK: 1,
            CONDENSED_OXYGEN: 50
        }
    },
    NUCLEAR_FUEL: {
        name: 'радиоактивное топливо',
        description: 'выделяет энергию за счет ядерного распада',
        size: 'm',
        craft: {
            URANIUM: 20,
            TRITIUM: 40,
            EMPTY_TANK: 1
        }
    },
    SHEATHING: {
        name: 'простая обшивка',
        description: 'простая обшивка',
        size: 'l',
        craft: {
            ALUMINIUM: 40
        }
    },
    WATER_TANK: {
        name: 'водяной бак',
        description: 'бак с водой',
        size: 'l',
        craft: {
            EMPTY_TANK: 1,
            WATER: 40
        }
    },
    ADVANCED_CIRCUIT: {
        name: 'продвинутая микросхема',
        size: 's',
        description: 'используется в сложных механизмах',
        craft: {
            CIRCUIT: 5,
            IRIDIUM: 50
        },
        craftModuleRequired: [resourceEnum.PORTABLE_MACHINE]
    },
    COMPUTER: {
        name: 'ЭВМ',
        size: 'm',
        description: 'нужна для рассчетов',
        craft: {
            ADVANCED_CIRCUIT: 5,
            ALUMINIUM: 20,
            WIRING: 40
        },
        craftModuleRequired: [resourceEnum.PORTABLE_MACHINE]
    },
    WIRING: {
        name: 'проводка',
        size: 'm',
        description: 'передает сигналы или энергию',
        craft: {
            COPPER: 5,
            PLASTIC: 5
        }
    },
    CONCRETE: {
        name: 'бетонный раствор',
        size: 'l',
        description: 'при затвердевании образует очень твердый материал',
        craft: {
            WATER: 10,
            STONE_DUST: 40
        }
    },
    SOLAR_LAMP: {
        name: 'солнечная лампа',
        size: 'm',
        description: 'излучает солнечный свет, необходимый для роста растений с Земли',
        craft: {
            ALUMINIUM: 200,
            LIQUID_SUN: 5
        }
    },
    MACHINE: {
        name: 'станок',
        description: 'может работать с ресурсами',
        size: 'xl'
    },
    SEAWEED: {
        name: 'живые водоросли',
        description: 'растут под водой',
        size: 'm'
    },
    GRAVITINO_BALL: {
        name: 'шар гравитино',
        size: 'l',
        description: 'шар, искажающий гравитационное поле'
    },
    MONEY: {
        name: 'деньга',
        size: 's',
        description: 'служебное'
    },
    DURABLE_GLASS: {
        name: 'сверхпрочное стекло',
        description: 'очень прочное',
        size: 'm'
    },
    SEALANT: {
        name: 'герметик',
        description: 'герметизирует',
        size: 's'
    },
    GLASS_PANEL: {
        name: 'стеклянная панель',
        size: 'm',
        description: 'стеклянная панель'
    },
    ION_BATTERY: {
        name: 'ионная батарея',
        size: 's',
        description: '',
        craft: {
            COBALT: 10,
            STONE_DUST: 5
        }
    },
    ANOMALY_DETECTOR: {
        name: 'детектор аномалий',
        size: 's',
        description: '',
        craft: {
            EXTRACTED_DATA: 5,
            RADIO_EMITTER: 1,
            RADON: 10,
            ADVANCED_CIRCUIT: 2
        }
    },
    EXTRACTED_DATA: {
        name: 'извлеченные данные',
        size: 's',
        description: ''
    },
    PORTABLE_REFINER: {
        name: 'корабельный очиститель',
        description: '',
        size: 'xl',
        starShipConsumable: true
    },
    METAL_PLATE: {
        name: 'металлическая пластина',
        size: 's',
        description: ''
    },
    PORTABLE_MACHINE: {
        name: 'корабельный станок',
        description: '',
        size: 'xl',
        starShipConsumable: true
    },
    ANTENNA: {
        name: 'антенна',
        description: '',
        size: 'm',
        craft: {
            COPPER: 5,
            ALUMINIUM: 10,
            PLASTIC: 5
        }
    },
    BEACON: {
        name: 'навигационный маяк',
        size: 's',
        description: '',
        craft: {
            EXTRACTED_DATA: 20,
            ALUMINIUM: 100,
            RADIO_EMITTER: 2,
            RADIO_CONSUMER: 1,
            QUARTZ: 5
        },
        craftModuleRequired: [resourceEnum.PORTABLE_MACHINE]
    },
    QUANTUM_COMPUTER: {
        name: 'квантовый компьютер',
        description: '',
        size: 'm',
        craft: {
            SUPERCONDUCTOR_FIBER: 5,
            COMPUTER: 5,
            ADVANCED_CIRCUIT: 50
        }
    },
    STAR_SILK: {
        name: 'звездный шелк',
        size: 's',
        description: '',
        baseExtraction: 70
    },
    SUPERCONDUCTOR: {
        name: 'сверхпроводник',
        size: 's',
        description: '',
        craft: {
            ENRICHED_CARBON: 1,
            SEMICONDUCTOR: 1
        }
    },
    ENRICHED_CARBON: {
        name: 'обогащенный углерод',
        size: 's',
        description: '',
        craft: {
            CONDENSED_CARBON: 50,
            RADON: 250,
            HELIUM: 150
        },
        craftModuleRequired: [resourceEnum.PORTABLE_REFINER]
    },
    SUPERCONDUCTOR_FIBER: {
        name: 'сверхпроводящее волокно',
        size: 's',
        description: '',
        craft: {
            STAR_SILK: 300,
            SUPERCONDUCTOR: 1
        }
    },
    SEMICONDUCTOR: {
        name: 'полупроводник',
        size: 's',
        description: ''
    }
}

export default ResourcesConstant