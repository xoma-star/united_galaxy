import TelegramBot, {Message} from "node-telegram-bot-api";
import MESSAGES from "../../messages";

const onFirstStepsGalaxyCommandListener = async (bot: TelegramBot, message: Message) => {
    try {
        await bot.sendMessage(message.from?.id || -1, MESSAGES.RU.FIRST_STEPS_GALAXY)
        await bot.sendMessage(message.from?.id || -1, MESSAGES.RU.FIRST_STEPS_GALAXY_2)
    }
    catch (e) {
        console.log(e)
    }
}

export default onFirstStepsGalaxyCommandListener