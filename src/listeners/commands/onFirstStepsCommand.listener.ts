import TelegramBot, {Message} from "node-telegram-bot-api";
import MESSAGES from "../../messages";

const onFirstStepsCommandListener = async (bot: TelegramBot, msg: Message) => {
    try {
        await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.FIRST_STEPS)
        await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.FIRST_STEPS_2)
        await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.FIRST_STEPS_3)
    }
    catch (e) {
        console.log(e)
    }
}

export default onFirstStepsCommandListener