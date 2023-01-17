import TelegramBot, {Message} from "node-telegram-bot-api";
import MESSAGES from "../../messages";
import KEYBOARDS from "../../keyboards";

const onSelfColoniesInfoListener = async (bot: TelegramBot, message: Message) => {
    await bot.sendMessage(message.from?.id || -1, MESSAGES.RU.USERS_COLONIES, {
        reply_markup: {inline_keyboard: KEYBOARDS.COLONIES_SELF_INFO}
    })
}

export default onSelfColoniesInfoListener