import TelegramBot, {Message} from "node-telegram-bot-api";
import KEYBOARDS from "../../keyboards";
import MESSAGES from "../../messages";
import getUserData from "../../pocketbase/getUserData";

const starshipButtonListener = async (bot: TelegramBot, msg: Message) => {
    const userData = await getUserData(msg.from?.id || -1)
    await bot.sendMessage(msg.from?.id || -1,
        MESSAGES.RU.SHIP_INFO(userData.shipTechnologies),
        {parse_mode: 'Markdown', reply_markup: {
            inline_keyboard: KEYBOARDS.STARSHIP
    }})
}

export default starshipButtonListener