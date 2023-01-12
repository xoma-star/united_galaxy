import TelegramBot from "node-telegram-bot-api";
import checkCoordinatesValid from "../misc/checkCoordinatesValid";
import systemGenerator from "../generators/system.generator";

const onWebappData = (bot: TelegramBot) => {
    bot.on('web_app_data', (message) => {
        const data = message.web_app_data?.data
        if(typeof data === 'undefined') return bot.sendMessage(message.from?.id || -1, 'Неизвестная ошибка')
        const seed = JSON.parse(data).coordinates
        const coordinates = seed.split(':')
        if(checkCoordinatesValid(coordinates[0], coordinates[1])){
            const system = systemGenerator(seed)
            bot.sendMessage(message.from?.id || -1,
                `Информация о звездной системе (${seed}):` +
                `Спектральный класс: ${system.type}`
            )
        }
        else{
            bot.sendMessage(message.from?.id || -1, 'Некорректные координаты')
        }
    })
}

export default onWebappData