import BiomeSchema from "../schemas/biome.schema";

const BiomeConstant: BiomeSchema = {
    LUSH: {
        possibleNames: ['травянистая', 'тропическая', 'зеленая', 'цветущая', 'умеренная', 'плодородная', 'заросшая', 'изобильная'],
        name: 'цветущий',
        difficultyMultiplier: 0.8,
        possibleSurfaces: {
            LAKY: 0.1,
            ISLANDS: 0.1,
            CONTINENTAL: 0.6,
            PANGEAN: 0.2
        },
        faunaLevel: {
            min: 1,
            max: 5,
            average: 3
        },
        floraLevel: {
            min: 3,
            max: 5,
            average: 4
        },
        temperature: {
            average: 25,
            min: 10,
            max: 70
        },
        possibleResources: {
            CARBON: 1,
            OXYGEN: 0.6,
            HYDROGEN: 0.7,
            STONE: 1,
            URANIUM: 0.3,
            AMMONIA: 0.7,
            COPPER: 0.4,
            WATER: 0.8,
            SOIL: 1,
            BASALT: 0.3,
            GOLD: 0.6,
            CADMIUM: 0.4,
            SODIUM: 0.7,
            COBALT: 0.7,
            DIAMOND: 0.4,
            LEAD: 0.4,
            PLATINUM: 0.2,
            SILVER: 0.3,
            TITANIUM: 0.6,
            STAR_SILK: 0.8,
            SEEDS: 0.9
        }
    },
    BARREN: {
        possibleNames: ['пустынная', 'каменистая', 'суровая', 'сухая', 'покинутая', 'пустынная', 'пыльная', 'опустошённая', 'ветреная'],
        name: 'пустынный',
        difficultyMultiplier: 1.1,
        possibleSurfaces: {
            PANGEAN: 1
        },
        faunaLevel: {
            min: 1,
            max: 3,
            average: 1
        },
        floraLevel: {
            min: 1,
            max: 3,
            average: 1
        },
        temperature: {
            average: -50,
            min: -80,
            max: 160
        },
        possibleResources: {
            STONE_DUST: 1,
            STONE: 1,
            COPPER: 0.4,
            IRON: 0.4,
            BASALT: 0.4,
            SODIUM: 0.2,
            URANIUM: 0.2
        }
    },
    DEAD: {
        possibleNames: ['мёртвая', 'пустая', 'опустошённая', 'безжизненная', 'покинутая', 'непригодная к жизни', 'безвоздушная'],
        name: 'мертвый',
        difficultyMultiplier: 1.2,
        possibleSurfaces: {
            PANGEAN: 1
        },
        floraLevel: {
            min: 0,
            max: 0,
            average: 0
        },
        faunaLevel: {
            min: 0,
            max: 0,
            average: 0
        },
        temperature: {
            average: -120,
            min: -273,
            max: 1200
        },
        possibleResources: {
            STONE: 1,
            INDIUM: 0.2,
            IRON: 0.4,
            URANIUM: 0.2,
            COPPER: 0.3,
            GOLD: 0.1
        }
    },
    ICY: {
        possibleNames: ['замёрзшая', 'обледенелая', 'арктическая', 'покрытая ледниками', 'морозная', 'ледяная', 'застывшая', 'заснеженная', 'ледниковая'],
        name: 'ледяной',
        difficultyMultiplier: 1.1,
        possibleSurfaces: {
            CONTINENTAL: 0.4,
            PANGEAN: 0.3,
            LAKY: 0.3
        },
        faunaLevel: {
            min: 0,
            max: 4,
            average: 2
        },
        floraLevel: {
            min: 0,
            max: 4,
            average: 3
        },
        temperature: {
            average: -30,
            min: -273,
            max: 0
        },
        possibleResources: {
            DEUTERIUM: 0.6,
            HYDROGEN: 0.4,
            STONE: 1,
            FROST_CRYSTAL: 0.7,
            NITROGEN: 0.6
        }
    },
    EXOTIC: {
        possibleNames: ['экзотическая', 'аномальная', 'искаженная'],
        name: 'аномалия',
        difficultyMultiplier: 1,
        possibleSurfaces: {
            PANGEAN: 1
        },
        faunaLevel: {
            min: 0,
            max: 0,
            average: 0
        },
        floraLevel: {
            min: 0,
            max: 1,
            average: 0
        },
        temperature: {
            average: 15,
            max: 15,
            min: 15
        },
        possibleResources: {
            INDIUM: 1,
            STONE: 1,
            PLATINUM: 1,
            TITANIUM: 1,
            DIAMOND: 1,
            SILVER: 1,
            GOLD: 1,
            CADMIUM: 1,
            COPPER: 1,
            IRIDIUM: 1,
            QUARTZ: 1,
            GRAVITINO_BALL: 1
        }
    },
    MARSH: {
        possibleNames: ['болотная', 'заболоченная', 'тропическая', 'туманная', 'мглистая', 'топкая', 'зыбкая', 'вонючая', 'сырая'],
        name: 'болотистый',
        difficultyMultiplier: 1,
        possibleSurfaces: {
            CONTINENTAL: 0.5,
            LAKY: 0.3,
            PANGEAN: 0.2
        },
        faunaLevel: {
            min: 0,
            max: 5,
            average: 1
        },
        floraLevel: {
            min: 1,
            max: 5,
            average: 2
        },
        temperature: {
            average: 20,
            min: -20,
            max: 60
        },
        possibleResources: {
            STONE: 1
        }
    },
    RADIATED: {
        possibleNames: ['облучённая', 'радиоактивная', 'заражённая', 'ядерная', 'изотопная'],
        name: 'радиоактивный',
        difficultyMultiplier: 1.3,
        possibleSurfaces: {
            LAKY: 0.3,
            CONTINENTAL: 0.4,
            PANGEAN: 0.3
        },
        faunaLevel: {
            min: 0,
            max: 3,
            average: 0
        },
        floraLevel: {
            min: 0,
            max: 3,
            average: 0
        },
        temperature: {
            min: -273,
            max: 600,
            average: -150
        },
        possibleResources: {
            URANIUM: 0.8,
            STONE: 1
        }
    },
    SCORCHED: {
        possibleNames: ['обугленная', 'безводная', 'выжженная', 'горячая', 'огненная', 'кипящая', 'жаркая', 'раскалённая'],
        name: 'выжженный',
        difficultyMultiplier: 1.5,
        possibleSurfaces: {
            PANGEAN: 1
        },
        faunaLevel: {
            min: 0,
            max: 1,
            average: 0
        },
        floraLevel: {
            min: 0,
            max: 1,
            average: 0
        },
        temperature: {
            min: 200,
            max: 1200,
            average: 400
        },
        possibleResources: {
            LIQUID_SUN: 0.5,
            CADMIUM: 0.6,
            STONE: 1,
            BASALT: 0.9,
            GOLD: 0.5
        }
    },
    TOXIC: {
        possibleNames: ['токсичная', 'ядовитая', 'отравленная', 'кислотная', 'щёлочная', 'едкая', 'гниющая'],
        name: 'отравленный',
        difficultyMultiplier: 1.3,
        possibleSurfaces: {
            LAKY: 0.5,
            CONTINENTAL: 0.2,
            PANGEAN: 0.3
        },
        faunaLevel: {
            min: 0,
            max: 3,
            average: 1
        },
        floraLevel: {
            min: 0,
            max: 3,
            average: 1
        },
        temperature: {
            average: -90,
            min: -273,
            max: 200
        },
        possibleResources: {
            CHLORINE: 0.7,
            AMMONIA: 0.7,
            STONE: 1
        }
    },
    VOLCANIC: {
        possibleNames: ['лавовая', 'магматическая', 'извергающаяся', 'вулканическая', 'пепельная', 'расплавленная', 'полыхающая', 'базальтовая'],
        name: 'вулканический',
        difficultyMultiplier: 1.4,
        possibleSurfaces: {
            ARCHIPELAGO: 0.5,
            ISLANDS: 0.3,
            PANGEAN: 0.1,
            CONTINENTAL: 0.1
        },
        faunaLevel: {
            min: 0,
            max: 0,
            average: 0
        },
        floraLevel: {
            min: 0,
            max: 0,
            average: 0
        },
        temperature: {
            min: -273,
            max: 300,
            average: -40
        },
        possibleResources: {
            CHLORINE: 0.8,
            STONE: 1,
            BASALT: 0.9,
            SODIUM: 0.4
        }
    },
    GAS: {
        possibleNames: ['газовая', 'состоящая из газа'],
        name: 'газовый',
        difficultyMultiplier: 1,
        possibleSurfaces: {
            GAS: 1
        },
        faunaLevel: {
            min: 0,
            max: 0,
            average: 0
        },
        floraLevel: {
            min: 0,
            max: 0,
            average: 0
        },
        temperature: {
            min: -273,
            max: -150,
            average: -200
        },
        possibleResources: {
            HYDROGEN: 0.8,
            NITROGEN: 0.9,
            HELIUM: 1
        }
    },
    WATER: {
        possibleNames: ['покрытая водой', 'затопленная'],
        name: 'водяной',
        difficultyMultiplier: 1,
        possibleSurfaces: {
            OCEANIC: 0.5,
            REEF: 0.5
        },
        faunaLevel: {
            min: 0,
            max: 5,
            average: 3
        },
        floraLevel: {
            min: 0,
            max: 5,
            average: 3
        },
        temperature: {
            min: 1,
            max: 99,
            average: 40
        },
        possibleResources: {
            WATER: 1,
            STONE: 1
        }
    }
}

export default BiomeConstant