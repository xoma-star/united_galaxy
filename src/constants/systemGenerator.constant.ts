import systemGeneratorSchema from "../schemas/systemGenerator.schema";

const SystemGeneratorConstant: systemGeneratorSchema = {
    DEFAULT: {
        chance: 0.8,
        controlledByChance: {
            CONFLICT: 0,
            GOVERNMENT: 0.6,
            PIRATE: 0.2,
            REBELS: 0.2
        },
        planets: {
            max: 9,
            min: 1,
            chance: {
                LUSH: 0.01,
                GAS: 0.1,
                WATER: 0.05,
                TOXIC: 0.1,
                ICY: 0.05,
                SCORCHED: 0.1,
                EXOTIC: 0.0,
                MARSH: 0.0,
                DEAD: 0.4,
                BARREN: 0.04,
                RADIATED: 0.1,
                VOLCANIC: 0.05
            }
        },
        resourcesMultiplier: {
            OXYGEN: 1.2
        }
    },
    BLUE: {
        chance: 0.075,
        controlledByChance: {
            CONFLICT: 0.4,
            GOVERNMENT: 0.5,
            PIRATE: 0.05,
            REBELS: 0.05
        },
        planets: {
            max: 4,
            min: 1,
            chance: {
                LUSH: 0.1,
                GAS: 0.2,
                WATER: 0.3,
                TOXIC: 0.0,
                ICY: 0.2,
                SCORCHED: 0.0,
                EXOTIC: 0.0,
                MARSH: 0.0,
                DEAD: 0.1,
                BARREN: 0.1,
                RADIATED: 0.0,
                VOLCANIC: 0.0
            }
        },
        resourcesMultiplier: {
            WATER: 5
        }
    },
    RED: {
        chance: 0.05,
        controlledByChance: {
            CONFLICT: 0,
            GOVERNMENT: 0,
            PIRATE: 0.8,
            REBELS: 0.2
        },
        planets: {
            max: 2,
            min: 0,
            chance: {
                LUSH: 0.0,
                GAS: 0.0,
                WATER: 0.0,
                TOXIC: 0.0,
                ICY: 0.0,
                SCORCHED: 0.5,
                EXOTIC: 0.1,
                MARSH: 0.0,
                DEAD: 0.1,
                BARREN: 0.1,
                RADIATED: 0.0,
                VOLCANIC: 0.2
            }
        },
        resourcesMultiplier: {
            CADMIUM: 3
        }
    },
    GREEN: {
        chance: 0.075,
        controlledByChance: {
            CONFLICT: 0.3,
            GOVERNMENT: 0.3,
            PIRATE: 0.1,
            REBELS: 0.3
        },
        planets: {
            max: 5,
            min: 2,
            chance: {
                LUSH: 0.5,
                GAS: 0,
                WATER: 0,
                TOXIC: 0.1,
                ICY: 0.1,
                SCORCHED: 0,
                EXOTIC: 0,
                MARSH: 0.1,
                DEAD: 0,
                BARREN: 0,
                RADIATED: 0.1,
                VOLCANIC: 0.1
            }
        },
        resourcesMultiplier: {
            SOIL: 5
        }
    }
}

export default SystemGeneratorConstant