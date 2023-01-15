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
            `Расстояние до системы - ${Intl.NumberFormat('ru', {notation: 'compact'}).format(distance)} св. л.\n` +
            `Затраты гипертоплива - ${Intl.NumberFormat('ru', {notation: 'compact'}).format(distance * 5)} ед.\n` +
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
            `Установленные модули: \n` +
            `${technologies.map(x => ResourcesConstant[x].name)}`
    },
    SHIP_INVENTORY: (resources: {[K in keyof typeof ResourceEnum]?: number}) => {
        return `*Грузовой отсек*\n` +
        `Заполненность: ${(Object.keys(resources) as ResourceEnum[])
            .map(x => resources[x])
            .reduce((a, b) => (a || 0) + (b || 0), 0)}/${globalConstant.baseShipCargoLoad} \n` +
        `${(Object.keys(resources) as ResourceEnum[]).map(x => 
            `${capitalize(ResourcesConstant[x].name)}: ${resources[x]}`
        )}`
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
            `Тип поверхности: ${landscapeConstant[planet.surface].name}`
    }
} as const satisfies MessagesSchema

export default MessagesRU