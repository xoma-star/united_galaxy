import MessagesSchema from "../schemas/messages.schema";
import SystemGeneratorConstant from "../constants/systemGenerator.constant";
import SystemEnum from "../enums/system.enum";
import systemEnum from "../enums/system.enum";
import ResourcesConstant from "../constants/resources.constant";
import ResourceEnum from "../enums/resource.enum";
import systemControlledByConstant from "../constants/SystemControlledBy.constant";
import calculateDistance from "../misc/calculateDistance";
import SystemSchema from "../schemas/system.schema";
import plural from 'plural-ru'
import globalConstant from "../constants/global.constant";
import capitalize from "../misc/capitalize";
import systemGenerator from "../generators/system.generator";
import SystemControlledByConstant from "../constants/SystemControlledBy.constant";
import biomeConstant from "../constants/biome.constant";
import getRandomFromArray from "../misc/getRandomFromArray";
import planetSchema from "../schemas/planet.schema";
import landscapeConstant from "../constants/landscape.constant";
import ColonySchema from "../schemas/colony.schema";
import calculateCargoLoad from "../misc/calculateCargoLoad";
import BuildingsConstant from "../constants/buildings.constant";
import BuildingSchema from "../schemas/building.schema";
import marketItemSchema from "../schemas/marketItem.schema";
import depthOfMarket from "../misc/depthOfMarket";

const MessagesRU = {
    START_MESSAGE: 'Добро пожаловать на просторы Единой Галактики ✨! Где это? Вы когда-нибудь слышали о мультивселенных? ' +
        'Ладно, наверное, это слишком сложно для вас 😓. ' +
        'Суть в том, что это может приносить хорошие деньги 🤑. Как? Ну, в других вселенных есть множество ресурсов, которые можно выгодно продать 💰. ' +
        'Это удобно, потому что в других вселенных люди уже достаточно далеко продвинулись, чтобы изучить все необходимые для этого технологии. ' +
        'То есть ресурсы добываются и продаются в других вселенных, а деньги можно будет получить здесь 🤑🤑🤑. ' +
        'Инвесторы готовы проспонсировать кого угодно 🙈🙊🙉, ведь чем больше людей участвует в этом, тем выше шанс, что кого-то из них встретит успех 📈. ' +
        'От вас требуется создать компанию и приступить к добыче денег 💰💰💰💰💰.',
    START_MESSAGE_2: 'К сожалению, из других вселенных может приходить только простая информация 📨. Нолики и единички 0⃣1⃣. Поэтому общение с ними ограничено 😔. ' +
        'Благодаря специальным алгоритмам сжатия 📥, вы сможете отправлять и получать текстовую информацию с помощью МТУК - мобильного терминала управления компанией 📟. ' +
        'Собственно, с помощью него вы этот текст и читаете. Кстати, пока вы это делали, мы уже зарегистрировали вас в системе, благо, ' +
        'была подходящая вселенная 🤗. Посмотрите команды терминала (кнопочка слева от текстового поля 🤓🤓), там вы найдете дальнейшие инструкции.',
    FIRST_STEPS: 'Отлично! Уже немного освоились. Кажется, вы уже умнее 🐒 обезь... Эм... В общем, хочу сказать, что вы уже оправдываете ожидания инвесторов🫰 🫰💵! ' +
        'Итак. Вы помните, что нужно продавать ресурсы📈. Так? Так. Вопрос. Как их добывать? Сначала хорошо бы проанализировать галактическую биржу... ' +
        'Наверное, это слишком сложно для вас. Хотя, вы нашли эту команду. Простите, просто с такими иногда приходится общаться... 😭😭',
    FIRST_STEPS_2: 'Ладно. Биржа. Там собраны лоты других участников 📈. То есть кто-то что-то покупает, кто-то что-то продает 🤑. ' +
        'В одиночку любому развиваться очень сложно 😔. Для постройки колонии (об этом еще прочитаете) вам нужны сложные механизмы. На выделенные средства вы ' +
        'сможете купить необходимые материалы и построить базу(колонию) - основной инструмент добычи денег 🤑🤑. ' +
        'Так, установив базовые модули, вы сможете построить как рудник для добычи ископаемых, так и станок для сборки сложного оборудования.',
    FIRST_STEPS_3: 'Далее то, что собрали или изготовили, можно выставить на биржу 📈, чтобы продать 💰. Важно понимать, что у каждой сделки есть контрагент. ' +
        'Если вы что-то продаете, это что-то должен кто-то купить по той цене, которую вы выставили. Если вы установите цену сильно выше рыночной, вы вряд ли ' +
        'продадите это что-то. Это важно, поскольку выставленные на биржу предметы блокируются у вас. Вы не сможете их потратить, ' +
        'однако они будут занимать место 📦📦📦👎. ' +
        'Чем быстрее вы их продадите, тем лучше 👍👍. Также можно ресурсы не продавать, а пустить их дальше по производственной цепочке ⚙️,' +
        ' и производить самые сложные ' +
        'устройства, на которых можно будет больше заработать 🤑🤑📈👍. Перед тем, как прочитать о колониях и бирже, советую ознакомиться с /first_steps_galaxy .' +
        'Там описано строение галактики, в которой вы будете делать деньги 💰💰.',
    FIRST_STEPS_GALAXY: 'Забавно, что в каждой из мультивселенных есть одна и та же галактика 🌌. И в каждой из них она абсолютно одинакова. ' +
        'Галактика - место скопления звездных систем 🌟. Так уж сложилось🤔, что звезды в Единой галактике отличаются от известных вам. ' +
        'Вместо используемой на Земле гарвардской классификации 🤓🤓 в этой галактике используется деление на 4 типа звезд: ' +
        'красный 🔴, желтый 🟡, зеленый 🟢 и синий 🔵. ' +
        'Вокруг этих звезд вращаются планеты 🪐. Вместе они образуют звездную систему - место, где звездолеты 🚀 проводят большую часть времени. ' +
        'Да, вы будете управлять звездолетом. Не сами, конечно 😥😥😥, но через МТУК. ' +
        'Каждый тип звезд по-своему влияет на формирование планет, так что в каких-то системах ' +
        'будет больше вулканических 🌋 планет, а каких-то обычный камень будет самым ценным ресурсом 📉📉. ' +
        'Тип звезды также может влиять и на то, кем система контролируется. ' +
        'Так, корабли гильдии торговцев, никогда не сунутся в систему с красной 🔴 звездой. ' +
        'А пираты, наоборот, очень их любят.',
    FIRST_STEPS_GALAXY_2: 'Чтобы перемещаться между системами 🌟, нужен особый варп-двигатель. Он позволяет кораблю обогнать свет 💡 и перемещаться между системами буквально ' +
        'за секунды ⏰📈. Для его питания нужно особое гипертопливо 🛢️. Вы можете производить его сами или покупать на бирже. ' +
        'Для навигации между системами используйте Карту 🗺️ на клавиатуре терминала или команду /travel {координаты}. Для удобства отображения галактика ' +
        'на карте поделена на сектора: ' +
        'при выборе сектора вы приблизите его 🔎. Приблизив несколько раз 🔎🔎🔎, вы сможете увидеть системы этого сектора. Выбрав систему, вы ' +
        'сможете получить известную информацию 📝 о ней. Там будет не все 😑. ' +
        'Чтобы получить полные данные, нужно перелететь 🚀 в систему и задействовать сканеры 📡 корабля. ' +
        'После оценки обстановки решите, стоит ли работать в данной системе, или поискать что-то получше. ' +
        'Если захотите остаться, можно перейти к колониям /first_steps_colonies .',
    SYSTEM_TRAVEL_INFO: (systemType: systemEnum, coordinates: string, distance: number) => {
        let drive = 'Особый привод не требуется.';
        switch (systemType) {
            case SystemEnum.GREEN:
                drive = ResourcesConstant[ResourceEnum.INDIUM_DRIVE].name;
                break;
            case SystemEnum.RED:
                drive = ResourcesConstant[ResourceEnum.CADMIUM_DRIVE].name;
                break;
            case SystemEnum.BLUE:
                drive = ResourcesConstant[ResourceEnum.COBALT_DRIVE].name;
                break;
        }
        return `Перелет по координатам ${coordinates}.\n` +
            `Расстояние до системы - ${Intl.NumberFormat('ru', {notation: 'compact'}).format(Math.floor(distance))} св. л.\n` +
            `Затраты гипертоплива - ${Intl.NumberFormat('ru', {notation: 'compact'}).format(Math.floor(distance * globalConstant.hyperFuelPerYear))} ед.\n` +
            `Класс звезды - ${SystemGeneratorConstant[systemType].color}.\n` +
            (systemType !== SystemEnum.YELLOW ? `Требуется ${drive}` : drive)
    },
    INVALID_COORDINATES: 'Некорректные координаты. Вы можете воспользоваться картой.',
    SYSTEM_INFO: (system: SystemSchema, coordinates: string, currentCoordinates: string) => {
        return `Информация о звездной системе ${system.name}\n` +
        `Координаты: ${coordinates}\n` +
        `Цвет звезды: ${SystemGeneratorConstant[system.type].color}\n`+
        `Под контролем: ${systemControlledByConstant[system.controlledBy].name}\n` +
        `Количество планет: ${system.planets.length} \n` +
        `Расстояние до системы: ${Intl.NumberFormat('ru', {notation: 'compact'}).format(calculateDistance(currentCoordinates, coordinates))} св.л.`
    },
    ERROR_UNKNOWN: 'Неизвестная ошибка.',
    COMPANY_INFO: (companyName: string, createdAt: Date, coloniesCount: number) => {
        return `Информация о компании ${companyName}: \n` +
        `Дата основания: ${new Date(createdAt).toLocaleString('ru', {weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric'})} \n` +
        `Управляет ${coloniesCount} ${plural(coloniesCount, 'колонией', 'колониями')}`
    },
    TRAVEL_EMPTY_COORDINATES: 'Введите после пробела координаты системы: /travel {координаты}',
    SHIP_INFO: (technologies: ResourceEnum[]) => {
        return `*Информация о корабле* \n` +
            `Установленные технологии: \n` +
            technologies.map(x => ResourcesConstant[x].name).join(', ')
    },
    SHIP_INVENTORY: (resources: {[K in keyof typeof ResourceEnum]?: number}) => {
        return `Грузовой отсек\n` +
        `Заполненность: ${calculateCargoLoad(resources)}/${globalConstant.baseShipCargoLoad} \n` +
        (Object.keys(resources) as ResourceEnum[])
            .filter(x => (resources[x] || 0) > 0)
            .map(x => `${capitalize(ResourcesConstant[x].name)}: ${resources[x]}`)
            .join("\n")
    },
    SYSTEM_INFO_SELF: (coordinates: string) => {
        const system = systemGenerator(coordinates)
        return `Вы находитесь в системе ${system.name}\n` +
            `Координаты системы: ${coordinates.toUpperCase()}\n` +
            `Цвет звезды: ${SystemGeneratorConstant[system.type].color}\n` +
            `Под контролем: ${SystemControlledByConstant[system.controlledBy].name}\n` +
            `Количество планет: ${system.planets.length} (для подробной информации задействуйте планетарный сканер)`
    },
    PLANET_SCANNER: (planets: planetSchema[]) => {
        return `Задействован планетарный сканер. Получаю информацию о следующих планетах: \n` + planets.map(x => x.name).join(', ')
    },
    PLANET_INFO: (planet: planetSchema, planetIndex: number) => {
        return `${capitalize(getRandomFromArray(biomeConstant[planet.biome].possibleNames))} планета ${planet.name} (${planetIndex + 1}-ая от звезды)\n` +
            `Биом: ${biomeConstant[planet.biome].name}\n` +
            `Тип поверхности: ${landscapeConstant[planet.surface].name}\n` +
            `Плотность растительности: ${planet.floraLevel}/5\n` +
            `Плостность живности: ${planet.faunaLevel}/5\n` +
            `Средняя температура на поверхности: ${planet.temperature}°C\n` +
            `Плотность атмосферы: ${Math.floor(planet.atmosphereLevel * 100)}% от земной\n` +
            `Доступные ресурсы: ` + planet.resources.map(x => ResourcesConstant[x].name).join(', ')
    },
    MOVE_TO_SAME_PLACE: 'Вы уже находитесь здесь.',
    NOT_ENOUGH_FUEL: (have: number, need: number) => `Недостаточно топлива: у вас ${have} из ${need}`,
    STARSHIP_DEPARTURE: 'Подготовка к варп-прыжку...',
    WARP_DRIVE_REQUIRED: 'Для перелета между системами необходимо установить варп-двигатель.',
    INDIUM_DRIVE_REQUIRED: 'Для перелета в эту систему необходим индиевый привод',
    CADMIUM_DRIVE_REQUIRED: 'Для перелета в эту систему необходим кадмиевый привод',
    COBALT_DRIVE_REQUIRED: 'Для перелета в эту систему необходим кобальтовый привод',
    NO_MODULES_AVAILABLE: 'Нет доступных технологий',
    MODULES_AVAILABLE: 'Доступные для установки модули',
    MODULE_ALREADY_INSTALLED: 'Модуль уже установлен',
    MODULE_SUCCESSFULLY_INSTALLED: (module: ResourceEnum) => `Модуль ${capitalize(ResourcesConstant[module].name)} успешно установлен`,
    COMPANY_RENAME_TOOLTIP: 'Для переименования используйте /change_name {новое название}. Разрешены буквы и цифры. Максимальная длина - 64 символа.',
    RENAME_SUCCESS: (newName: string) => `Новое название компании записано в систему. Теперь она называется ${newName}`,
    RENAME_FORMAT_ERROR: 'После удаления недоступных символов название стало пустым',
    RENAME_TOO_LONG: 'Слишком длинное название',
    PLANET_SCANNER_REQUIRED: 'Сначала установите планетарный сканер. Он позволит получать более подробную информацию о планетах.',
    USERS_COLONIES: 'Информация о колониях',
    FOUND_COLONY_SELECT_PLANET: 'Выберите планету для основания колонии. Не рекомендуется строить колонии на неразведанных планетах.',
    NO_COLONIZATION_PLANETS: 'Нет планет, подходящих для колонизации. Переместитесь в другую систему.',
    COLONIZATION_PLANET_INFO: (name: string, index: number) => `Планета ${name} (${index + 1}-я от звезды)`,
    NOT_IN_SELECTED_SYSTEM: 'Вы в другой звездной системе',
    COLONY_CREATED_SUCCESSFULLY: 'Маяк колонии установлен. Теперь необходимо построить базовые модули. Перейдите в ваши колонии, чтобы узнать подробнее.',
    COLONY_ALREADY_EXISTS: 'На этой планете уже есть ваша колония. Выберите другую.',
    LIST_SELF_COLONIES: 'Список колоний в вашем управлении. Здесь не только те, которые вы основали, но и к которым вам выдали доступ.',
    LIST_SELF_COLONIES_EXACT: (colony: ColonySchema, sameSystem: boolean) => `Колония ${colony.name}. \n` +
        `Расположена в ${colony.coordinates.system} на ${colony.coordinates.planetIndex + 1}-й планете от звезды.\n` +
        `${!sameSystem ? 'Чтобы управлять колонией, переместитесь в ее систему.' : ''}`,
    NO_COLONIES_MANAGED: 'У вас нет управляемых колоний.',
    COLONY_INFO_FULL: (colony: ColonySchema) => `Терминал управления колонией ${colony.name}\n` +
        `Модули колонии: ${colony.modules.map(x => BuildingsConstant[x.module_name].name).join(', ')}\n` +
        `Заполненность склада: ${calculateCargoLoad(colony.storage)}/${globalConstant.baseColonyStorage}`,
    COLONY_BUILDING_INFO: (building: BuildingSchema) => ` ${capitalize(BuildingsConstant[building.module_name].name)}\n` +
        (building.completed ?
            `` :
            `Модуль не построен. Необходимые ресурсы: \n` +
            (Object.keys(building.resourcesRequired) as ResourceEnum[])
                .map(x => `${capitalize(ResourcesConstant[x].name)}: ${building.resourcesRequired[x]}`)
                .join("\n")
        ),
    COLONY_BUILDING_DELIVERED_RESOURCE: (resource: ResourceEnum, count: number) => `${ResourcesConstant[resource].name}: доставлено на стройплощадку в количестве ${count}`,
    COLONY_BUILDING_DELIVERED_LEFT: (resource: ResourceEnum, count: number) => count === 0 ? `Вы доставили все ${ResourcesConstant[resource].name}`
        : `Чтобы закончить постройку, нужно еще ${count} ${ResourcesConstant[resource].name}`,
    ITEM_NOT_FOUND: (target: string) => `Предмет не найден. Возможно, вы имели в виду: ${target}`,
    ITEM_LISTING: (listing: marketItemSchema) => {
        const lot = (type: 'bid' | 'ask', count: number, price: number) => (type === 'bid' ? 'Покупка' : 'Продажа') + ` ${count} шт. за ${price}`
        const DOM = depthOfMarket(listing, 3)
        return (DOM.buy.map(x => lot('bid', x.count, x.price)).join("\n") || "Нет лотов на покупку\n") + "\n" +
            (DOM.sell.map(x => lot('ask', x.count, x.price)).join("\n") || "Нет лотов на продажу")

    },
    STOCKS_TOOLTIP: `Чтобы подключиться к бирже используйте команды: \n` +
        `Продать: /sell {название предмета} {количество} {(опционально) цена за шт.} \n` +
        `Купить: /buy {название предмета} {количество} {(опционально) цена за шт.} \n` +
        `Если не указывать цену, сделка пройдет по рыночной цене. \n` +
        `Чтобы посмотреть лучшие предложения, используйте /list {название предмета}.\n` +
        `Услуги биржи доступны только в подконтрольных правительству системах. \n` +
        `Комиссия биржи составляет ${globalConstant.stocksFee * 100}%`
    ,
    MORE_THAN_ZERO: 'Укажите количество больше нуля',
    NOT_ENOUGH_ITEMS: 'Недостаточно предметов.',
    ITEM_SELL_SUCCESS: (count: number, summary: number, item: ResourceEnum) => `Предмет ${ResourcesConstant[item].name} ` +
    `продан. Кол-во: ${count}. Зачисление на баланс: +${summary}`,
    ITEM_SELL_LOT_PLACED: (count: number, price: number, item: ResourceEnum) => `Продажа ${count} ${ResourcesConstant[item].name} по цене ${price}. ` +
        `Лот выставлен на биржу. После сделки вам придет уведомление.`,
    ITEM_SELL_MARKET_PRICE_NO_LOTS: `Сейчас этот предмет никто не покупает. Вы можете дополнительно указать цену, тогда вы разместите лот и другие участники ` +
        `смогут купить его у вас позже.`,
    ITEM_SELL_PARTIAL_SUCCESS_AND_LOT_PLACED: (countSold: number, countPlaced: number, summary: number, price: number, item: ResourceEnum) => `Частичная продажа. ` +
    `Часть покупателей была готова заплатить за ${ResourcesConstant[item].name} цену выше, чем предложили вы. Сейчас вы продали ${countSold} и получили ${summary}. ` +
        `Еще ${countPlaced} были размещены на бирже по цене ${price}`,
    ITEM_BUY_SUCCESS: (count: number, summary: number, item: ResourceEnum) => `Предмет ${ResourcesConstant[item].name} ` +
        `куплен. Кол-во: ${count}. Списание с баланса: -${summary}`,
    ITEM_BUY_LOT_PLACED: (count: number, price: number, item: ResourceEnum) => `Покупка ${count} ${ResourcesConstant[item].name} по цене ${price}. ` +
        `Лот выставлен на биржу. После сделки вам придет уведомление.`,
    ITEM_BUY_MARKET_PRICE_NO_LOTS: `Сейчас этот предмет никто не продает. Вы можете дополнительно указать цену, тогда вы разместите лот и другие участники ` +
        `смогут продать его вам позже.`,
    ITEM_BUY_PARTIAL_SUCCESS_AND_LOT_PLACED: (countSold: number, countPlaced: number, summary: number, price: number, item: ResourceEnum) => `Частичная покупка. ` +
        `Часть продавцов была готова продать ${ResourcesConstant[item].name} по цене ниже, чем предложили вы. Сейчас вы купили ${countSold} и потратили ${summary}. ` +
        `Запрос на еще ${countPlaced} был размещен на бирже по цене ${price}`,
    CONTRAGENT_BUY: (count: number, price: number, item: ResourceEnum) => `Сделка по вашему ` +
    `лоту на бирже: куплено ${count} ${ResourcesConstant[item].name} по цене ${price}`,
    CONTRAGENT_SELL: (count: number, price: number, item: ResourceEnum) =>` Сделка по вашему ` +
        `лоту на бирже: продано ${count} ${ResourcesConstant[item].name} по цене ${price}`,
    LOT_REMOVED_NOT_ENOUGH_MONEY: (item: ResourceEnum) => `Лот на покупку ${ResourcesConstant[item].name} снят: недостаточно средств.`,
    PARTIAL_BUY_MARKET: (count: number, summary: number, itemName: ResourceEnum) => `Частичная покупка: средств на балансе хватило на покупку ${count} ` +
        `${ResourcesConstant[itemName].name}. Списано со счета: ${summary}`,
    PARTIAL_SELL_MARKET: (count: number, summary: number, itemName: ResourceEnum) => `Частичная продажа: на бирже было ${count} подходящих запросов на покупку ` +
        `${ResourcesConstant[itemName].name}. Зачислено на счет: ${summary}`,
    STOCK_AVAILABLE_ONLY_GOV: 'Услуги биржи доступны только в подконтрольных правительству системах.',
} as const satisfies MessagesSchema

export default MessagesRU