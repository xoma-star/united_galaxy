import ResourcesSchema from "../schemas/resources.schema";

const ResourcesConstant: ResourcesSchema = {
    AMMONIA: {
        name: 'аммиак',
        description: 'бесцветный газ с резким характерным запахом'
    },
    STONE: {
        name: 'камень',
        description: 'каменная порода. преобладает в составе большинства планет'
    },
    WATER: {
        name: 'вода',
        description: 'жидкость, необходимая для поддержания жизни в колониях'
    },
    HELIUM: {
        name: 'гелий',
        description: 'бесцветный газ'
    },
    NITROGEN: {
        name: 'азот',
        description: 'бесцветный газ'
    },
    SODIUM: {
        name: 'натрий',
        description: 'мягкий металл'
    },
    HYDROGEN: {
        name: 'водород',
        description: 'самый распространенный элемент во вселенной'
    },
    BASALT: {
        name: 'базальт',
        description: 'вулканическая горная порода'
    },
    GOLD: {
        name: 'золото',
        description: 'драгоценный металл'
    },
    CHLORINE: {
        name: 'хлор',
        description: 'ядовитый газ'
    },
    CADMIUM: {
        name: 'кадмий',
        description: 'мягкий ковкий тягучий металл серебристо-белого цвета'
    },
    LIQUID_SUN: {
        name: 'жидкая звезда',
        description: 'частичка звезды. может производить много энергии'
    },
    URANIUM: {
        name: 'уран',
        description: 'радиоактивный металл'
    },
    INDIUM: {
        name: 'индий',
        description: 'очень мягкий металл серебристо-белого цвета'
    },
    FROST_CRYSTAL: {
        name: 'морозный кристал',
        description: 'кристалл, образованный в естественной среде при низких температурах'
    },
    COPPER: {
        name: 'медь',
        description: 'мягкий, ковкий и пластичный металл с очень высокой тепло- и электропроводностью'
    },
    DEUTERIUM: {
        name: 'дейтерий',
        description: 'стабильный изотоп водорода с атомной массой, равной 2'
    },
    IRON: {
        name: 'железо',
        description: 'ковкий переходный металл серебристо-белого цвета с высокой химической реакционной способностью'
    },
    STONE_DUST: {
        name: 'каменная пыль',
        description: 'каменная пыль'
    },
    OXYGEN: {
        name: 'кислород',
        description: 'при нормальных условиях — газ без цвета, вкуса и запаха'
    },
    CARBON: {
        name: 'углерод',
        description: 'основа органической жизни'
    },
    ASH: {
        name: 'пепел',
        description: 'результат сгорания'
    },
    COBALT: {
        name: 'кобальт',
        description: 'серебристо-белый, слегка желтоватый переходный металл с розоватым или синеватым отливом'
    },
    CONDENSED_CARBON: {
        name: 'сжатый углерод',
        description: 'углерод, у которого снижено расстояние между атомами'
    },
    CONDENSED_OXYGEN: {
        name: 'сжатый кислород',
        description: 'кислород, у которого снижено расстояние между атомами'
    },
    DIAMOND: {
        name: 'алмаз',
        description: 'сверхпрочный минерал, образованный из углерода'
    },
    IRON_DUST: {
        name: 'железная пыль',
        description: 'остаток от обработки железа'
    },
    PHOSPHORUS: {
        name: 'фосфор',
        description: 'фосфор'
    },
    PLATINUM: {
        name: 'платина',
        description: 'платина'
    },
    PYRITE: {
        name: 'пирит',
        description: 'пирит'
    },
    QUARTZ: {
        name: 'кварц',
        description: 'кварц'
    },
    RADON: {
        name: 'радон',
        description: 'радон'
    },
    SALT: {
        name: 'соль',
        description: 'соединение натрия и хлора'
    },
    SILICON: {
        name: 'кремний',
        description: 'кремний'
    },
    SILVER: {
        name: 'серебро',
        description: 'серебро'
    },
    TRITIUM: {
        name: 'тритий',
        description: 'тритий'
    },
    SOIL: {
        name: 'почва',
        description: 'почва'
    },
    ALUMINIUM: {
        name: 'алюминий',
        description: 'алюминий'
    },
    LEAD: {
        name: 'свинец',
        description: 'свинец'
    },
    OIL: {
        name: 'нефть',
        description: 'нефть'
    },
    GLASS_WOOL: {
        name: 'стекловата',
        description: 'хороший утеплитель'
    },
    PLASTIC: {
        name: 'пластик',
        description: 'получается из нефти'
    },
    STAINLESS_STEEL: {
        name: 'закаленная сталь',
        description: 'закаленная сталь'
    },
    TITANIUM: {
        name: 'титан',
        description: 'металл'
    },
    WORKER: {
        name: 'рабочий',
        description: '(служебное) нужен для обслуживания построек в колониях'
    },
    LIFE: {
        name: 'LIFE',
        description: '(служебное) LIFE'
    },
    INTERSTELLAR_SCANNER: {
        name: 'межзвездный сканнер',
        description: 'позволяет осуществлять навигацию между звездными системами',
        starShipConsumable: true
    },
    FOOD: {
        name: 'еда',
        description: 'необходима для поддержания жизни в колониях'
    },
    CIRCUIT: {
        name: 'электросхема',
        description: 'распечатанная плата, позволяющая управлять электроникой'
    },
    ENERGY: {
        name: 'энергия',
        description: '(служебное) нужна для функционирования большинства построек'
    },
    RADIO_CONSUMER: {
        name: 'приемник радиоволн',
        description: 'принимает радиоволны. эффективен в космосе'
    },
    RADIO_EMITTER: {
        name: 'излучатель радиоволн',
        description: 'излучает радиоволны. эффективен в космосе'
    },
    MAINTAIN: {
        name: 'MAINTAIN',
        description: '(служебное) ремонт колонии'
    },
    HYPER_FUEL: {
        name: 'гипертопливо',
        description: 'нужно для заправки варп-двигателя'
    },
    WARP_DRIVE: {
        name: 'варп-двигатель',
        description: 'нужен для перемещения между системами',
        starShipConsumable: true
    },
    COBALT_DRIVE: {
        name: 'кобальтовый привод',
        description: 'нужен для варпа в синие системы',
        starShipConsumable: true
    },
    CADMIUM_DRIVE: {
        name: 'кадмиевый привод',
        description: 'нужен для варпа в красные системы',
        starShipConsumable: true
    },
    INDIUM_DRIVE: {
        name: 'индиевый привод',
        description: 'нужен для варпа в зеленые системы',
        starShipConsumable: true
    },
    PLANET_SCANNER: {
        name: 'планетарный сканер',
        description: 'нужен для получения информации о планетах',
        starShipConsumable: true
    }
}

export default ResourcesConstant