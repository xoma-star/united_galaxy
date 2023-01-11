import TelegramBot, {Message} from "node-telegram-bot-api";
import KEYBOARDS from "../keyboards";

const starshipButtonListener = async (bot: TelegramBot, msg: Message) => {
    await bot.sendMessage(msg.from?.id || -1, 'Управление кораблем', {
        reply_markup: {
            inline_keyboard: KEYBOARDS.STARSHIP
        }
    })
}

export default starshipButtonListener