import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import MESSAGES from "../../messages";
import KEYBOARDS from "../../keyboards";

const onChangeNameCallbackListener = async (bot: TelegramBot, query: CallbackQuery) => {
    try {
        await bot.sendMessage(query.from.id, MESSAGES.RU.COMPANY_RENAME_TOOLTIP, {reply_markup: {inline_keyboard: KEYBOARDS.COMPANY_CHANGE_NAME_TOOLTIP}})
    }
    catch (e) {
        console.log(e)
    }
}

export default onChangeNameCallbackListener