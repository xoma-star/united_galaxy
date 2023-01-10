import BiomeSchema from "../schemas/biome.schema";

const BiomeConstant: BiomeSchema = {
    LUSH: {
        possibleNames: ['травянистая', 'тропическая', 'зеленая', 'цветущая', 'умеренная', 'плодородная', 'заросшая', 'изобильная'],
        difficultyMultiplier: 0.8,
        possibleSurfaces: {
            LAKY: 1,
            ISLANDS: 1,
            CONTINENTAL: 1,
            PANGEAN: 1
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
            SOIL: 1
        }
    },
    BARREN: {
        possibleNames: ['пустынная', 'каменистая', 'суровая', 'сухая', 'покинутая', 'пустынная', 'пыльная', 'опустошённая', 'ветреная'],
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
        difficultyMultiplier: 1.1,
        possibleSurfaces: {
            CONTINENTAL: 1,
            PANGEAN: 1,
            LAKY: 1
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
            STONE: 1
        }
    },
    MARSH: {
        possibleNames: ['болотная', 'заболоченная', 'тропическая', 'туманная', 'мглистая', 'топкая', 'зыбкая', 'вонючая', 'сырая'],
        difficultyMultiplier: 1,
        possibleSurfaces: {
            CONTINENTAL: 1,
            LAKY: 1
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
        difficultyMultiplier: 1,
        possibleSurfaces: {
            LAKY: 1,
            CONTINENTAL: 1,
            PANGEAN: 1
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
        difficultyMultiplier: 1,
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
        difficultyMultiplier: 1,
        possibleSurfaces: {
            LAKY: 1,
            CONTINENTAL: 1,
            PANGEAN: 1
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
        difficultyMultiplier: 1,
        possibleSurfaces: {
            ARCHIPELAGO: 1,
            ISLANDS: 1,
            PANGEAN: 1,
            CONTINENTAL: 1
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
        difficultyMultiplier: 1,
        possibleSurfaces: {
            OCEANIC: 1,
            REEF: 1
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