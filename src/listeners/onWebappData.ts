import TelegramBot from "node-telegram-bot-api";
import onSystemInfoWebappListener from "./webapp/onSystemInfoWebapp.listener";
import MESSAGES from "../messages";

const onWebappData = (bot: TelegramBot) => {
    bot.on('web_app_data', (message) => {
        const data = message.web_app_data?.data
        if(typeof data === 'undefined') return bot.sendMessage(message.from?.id || -1, MESSAGES.RU.ERROR_UNKNOWN)
        const dataParsed = JSON.parse(data)
        //TODO: добавить типизацию
        switch (dataParsed.command) {
            case 'travel': return onSystemInfoWebappListener(bot, dataParsed.coordinates, message.from?.id || -1)
        }
    })
}

export default onWebappData