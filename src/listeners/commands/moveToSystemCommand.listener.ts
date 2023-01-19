import TelegramBot, {Message} from "node-telegram-bot-api";
import MESSAGES from "../../messages";
import checkCoordinatesValid from "../../misc/checkCoordinatesValid";
import onSystemInfoWebappListener from "../webapp/onSystemInfoWebapp.listener";

const moveToSystemCommandListener = async (bot: TelegramBot, msg: Message, match: RegExpExecArray | null) => {
    try {
        if(!match) return await bot.sendMessage(msg.from?.id || -1, 'Неизвестная ошибка')
        const coordinates = match[1].split(':')
        if(!checkCoordinatesValid(coordinates[0], coordinates[1])) return await bot
            .sendMessage(msg.from?.id || -1,
                MESSAGES.RU.INVALID_COORDINATES
            )


        return onSystemInfoWebappListener(bot, coordinates.join(':'), msg.from?.id || -1)
    }
    catch (e) {
        console.log(e)
    }
}

export default moveToSystemCommandListener