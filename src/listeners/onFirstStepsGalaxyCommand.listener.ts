import TelegramBot, {Message} from "node-telegram-bot-api";
import MESSAGES from "../messages";

const onFirstStepsGalaxyCommandListener = async (bot: TelegramBot, message: Message) => {
    await bot.sendMessage(message.from?.id || -1, MESSAGES.RU.FIRST_STEPS_GALAXY)
    await bot.sendMessage(message.from?.id || -1, MESSAGES.RU.FIRST_STEPS_GALAXY_2)
}

export default onFirstStepsGalaxyCommandListener