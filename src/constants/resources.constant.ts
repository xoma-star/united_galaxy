import ResourcesSchema from "../schemas/resources.schema";

const ResourcesConstant: ResourcesSchema = {
    AMMONIA: {
        name: 'аммиак',
        description: 'бесцветный газ с резким характерным запахом',
        size: "m"
    },
    STONE: {
        name: 'камень',
        description: 'каменная порода. преобладает в составе большинства планет',
        size: 'm'
    },
    WATER: {
        name: 'вода',
        description: 'жидкость, необходимая для поддержания жизни в колониях',
        size: 'm'
    },
    HELIUM: {
        name: 'гелий',
        description: 'бесцветный газ',
        size: 'm'
    },
    NITROGEN: {
        name: 'азот',
        description: 'бесцветный газ',
        size: 'm'
    },
    SODIUM: {
        name: 'натрий',
        description: 'мягкий металл',
        size: 's'
    },
    HYDROGEN: {
        name: 'водород',
        description: 'самый распространенный элемент во вселенной',
        size: 'm'
    },
    BASALT: {
        name: 'базальт',
        description: 'вулканическая горная порода',
        size: 'l'
    },
    GOLD: {
        name: 'золото',
        description: 'драгоценный металл',
        size: 's'
    },
    CHLORINE: {
        name: 'хлор',
        description: 'ядовитый газ',
        size: 'm'
    },
    CADMIUM: {
        name: 'кадмий',
        description: 'мягкий ковкий тягучий металл серебристо-белого цвета',
        size: 's'
    },
    LIQUID_SUN: {
        name: 'жидкая звезда',
        description: 'частичка звезды. может производить много энергии',
        size: 's'
    },
    URANIUM: {
        name: 'уран',
        description: 'радиоактивный металл',
        size: 's'
    },
    INDIUM: {
        name: 'индий',
        description: 'очень мягкий металл серебристо-белого цвета',
        size: 's'
    },
    FROST_CRYSTAL: {
        name: 'морозный кристал',
        description: 'кристалл, образованный в естественной среде при низких температурах',
        size: 'm'
    },
    COPPER: {
        name: 'медь',
        description: 'мягкий, ковкий и пластичный металл с очень высокой тепло- и электропроводностью',
        size: 'm'
    },
    DEUTERIUM: {
        name: 'дейтерий',
        description: 'стабильный изотоп водорода с атомной массой, равной 2',
        size: 'm'
    },
    IRON: {
        name: 'железо',
        description: 'ковкий переходный металл серебристо-белого цвета с высокой химической реакционной способностью',
        size: 'm'
    },
    STONE_DUST: {
        name: 'каменная пыль',
        description: 'каменная пыль',
        size: 'xl'
    },
    OXYGEN: {
        name: 'кислород',
        description: 'при нормальных условиях — газ без цвета, вкуса и запаха',
        size: 'm'
    },
    CARBON: {
        name: 'углерод',
        description: 'основа органической жизни',
        size: 'l'
    },
    ASH: {
        name: 'пепел',
        description: 'результат сгорания',
        size: 'l'
    },
    COBALT: {
        name: 'кобальт',
        description: 'серебристо-белый, слегка желтоватый переходный металл с розоватым или синеватым отливом',
        size: 'm'
    },
    CONDENSED_CARBON: {
        name: 'сжатый углерод',
        description: 'углерод, у которого снижено расстояние между атомами',
        size: 'm'
    },
    CONDENSED_OXYGEN: {
        name: 'сжатый кислород',
        description: 'кислород, у которого снижено расстояние между атомами',
        size: 'm'
    },
    DIAMOND: {
        name: 'алмаз',
        description: 'сверхпрочный минерал, образованный из углерода',
        size: 's'
    },
    IRON_DUST: {
        name: 'железная пыль',
        description: 'остаток от обработки железа',
        size: 'm'
    },
    PHOSPHORUS: {
        name: 'фосфор',
        description: 'фосфор',
        size: 's'
    },
    PLATINUM: {
        name: 'платина',
        description: 'платина',
        size: "m"
    },
    PYRITE: {
        name: 'пирит',
        description: 'пирит',
        size: "m"
    },
    QUARTZ: {
        name: 'кварц',
        description: 'кварц',
        size: 's'
    },
    RADON: {
        name: 'радон',
        description: 'радон',
        size: 'l'
    },
    SALT: {
        name: 'соль',
        description: 'соединение натрия и хлора',
        size: 'xl'
    },
    SILICON: {
        name: 'кремний',
        description: 'кремний',
        size: 'm'
    },
    SILVER: {
        name: 'серебро',
        description: 'серебро',
        size: 'm'
    },
    TRITIUM: {
        name: 'тритий',
        description: 'тритий',
        size: 's'
    },
    SOIL: {
        name: 'почва',
        description: 'почва',
        size: 'l'
    },
    ALUMINIUM: {
        name: 'алюминий',
        description: 'алюминий',
        size: 'm'
    },
    LEAD: {
        name: 'свинец',
        description: 'свинец',
        size: 'm'
    },
    OIL: {
        name: 'нефть',
        description: 'нефть',
        size: 'm'
    },
    GLASS_WOOL: {
        name: 'стекловата',
        description: 'хороший утеплитель',
        size: 'm'
    },
    PLASTIC: {
        name: 'пластик',
        description: 'получается из нефти',
        size: 'l'
    },
    STAINLESS_STEEL: {
        name: 'закаленная сталь',
        description: 'закаленная сталь',
        size: 'm'
    },
    TITANIUM: {
        name: 'титан',
        description: 'металл',
        size: 's'
    },
    WORKER: {
        name: 'рабочий',
        description: '(служебное) нужен для обслуживания построек в колониях',
        size: 's'
    },
    LIFE: {
        name: 'LIFE',
        description: '(служебное) LIFE',
        size: 's'
    },
    INTERSTELLAR_SCANNER: {
        name: 'межзвездный сканнер',
        description: 'позволяет осуществлять навигацию между звездными системами',
        starShipConsumable: true,
        size: 'xl'
    },
    FOOD: {
        name: 'еда',
        description: 'необходима для поддержания жизни в колониях',
        size: 's'
    },
    CIRCUIT: {
        name: 'электросхема',
        description: 'распечатанная плата, позволяющая управлять электроникой',
        size: 's'
    },
    ENERGY: {
        name: 'энергия',
        description: '(служебное) нужна для функционирования большинства построек',
        size: 's'
    },
    RADIO_CONSUMER: {
        name: 'приемник радиоволн',
        description: 'принимает радиоволны. эффективен в космосе',
        size: 'l'
    },
    RADIO_EMITTER: {
        name: 'излучатель радиоволн',
        description: 'излучает радиоволны. эффективен в космосе',
        size: 'l'
    },
    MAINTAIN: {
        name: 'MAINTAIN',
        description: '(служебное) ремонт колонии',
        size: 's'
    },
    HYPER_FUEL: {
        name: 'гипертопливо',
        description: 'нужно для заправки варп-двигателя',
        size: 'l'
    },
    WARP_DRIVE: {
        name: 'варп-двигатель',
        description: 'нужен для перемещения между системами',
        starShipConsumable: true,
        size: 'xl'
    },
    COBALT_DRIVE: {
        name: 'кобальтовый привод',
        description: 'нужен для варпа в синие системы',
        starShipConsumable: true,
        size: 'l'
    },
    CADMIUM_DRIVE: {
        name: 'кадмиевый привод',
        description: 'нужен для варпа в красные системы',
        starShipConsumable: true,
        size: 'l'
    },
    INDIUM_DRIVE: {
        name: 'индиевый привод',
        description: 'нужен для варпа в зеленые системы',
        starShipConsumable: true,
        size: 'l'
    },
    PLANET_SCANNER: {
        name: 'планетарный сканер',
        description: 'нужен для получения информации о планетах',
        starShipConsumable: true,
        size: 'l'
    },
    IRIDIUM: {
        name: 'иридий',
        description: 'металл',
        size: 's'
    },
    INSULATION: {
        name: 'утеплитель',
        description: 'вспененный материал, который позволяет сохранять тепло',
        size: 'l'
    },
    FUNGAL_MOULD: {
        name: 'грибковая плесень',
        description: 'грибковая плесень',
        size: 's'
    },
    SEEDS: {
        name: 'семена',
        description: 'посадить, полить, подождать',
        size: 'm'
    },
    ANTIMATTER: {
        name: 'антиматерия',
        description: 'при контакте с материей уничтожается и выделяет огромное количество энергии',
        size: 's'
    },
    COMPOSITE_FRAME: {
        name: 'прочный каркас',
        size: 'l',
        description: 'легкий и прочный каркас'
    },
    COMPOSITE_SHEATHING: {
        name: 'композитная обшивка',
        size: 'l',
        description: 'устойчивая к внешним воздействиям обшивка. легко выдерживает самые тяжелые погодные условия'
    },
    EMPTY_TANK: {
        name: 'пустой бак',
        description: 'пустой бак',
        size: 'l'
    },
    FRAME: {
        name: 'простой каркас',
        description: 'простой каркас',
        size: 'l'
    },
    OXYGEN_TANK: {
        name: 'кислородный бак',
        description: 'бак со сжиженным кислородом',
        size: 'l'
    },
    NUCLEAR_FUEL: {
        name: 'радиоактивное топливо',
        description: 'выделяет энергию за счет ядерного распада',
        size: 'm'
    },
    SHEATHING: {
        name: 'простая обшивка',
        description: 'простая обшивка',
        size: 'l'
    },
    WATER_TANK: {
        name: 'водяной бак',
        description: 'бак с водой',
        size: 'l'
    },
    ADVANCED_CIRCUIT: {
        name: 'продвинутая микросхема',
        size: 's',
        description: 'используется в сложных механизмах'
    },
    COMPUTER: {
        name: 'ЭВМ',
        size: 'm',
        description: 'нужна для рассчетов'
    },
    WIRING: {
        name: 'проводка',
        size: 'm',
        description: 'передает сигналы или энергию'
    },
    CONCRETE: {
        name: 'бетонный раствор',
        size: 'l',
        description: 'при затвердевании образует очень твердый материал'
    },
    SOLAR_LAMP: {
        name: 'солнечная лампа',
        size: 'm',
        description: 'излучает солнечный свет, необходимый для роста растений с Земли'
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
    }
}

export default ResourcesConstant