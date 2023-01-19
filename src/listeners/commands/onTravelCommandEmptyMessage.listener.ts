import TelegramBot, {Message} from "node-telegram-bot-api";
import MESSAGES from "../../messages";

const onTravelCommandEmptyMessageListener = async (bot: TelegramBot, message: Message) => {
    try {
        await bot.sendMessage(message.from?.id || -1, MESSAGES.RU.TRAVEL_EMPTY_COORDINATES)
    }
    catch (e){
        console.log(e)
    }
}

export default onTravelCommandEmptyMessageListener