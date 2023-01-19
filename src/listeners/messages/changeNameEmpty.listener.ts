import TelegramBot, {Message} from "node-telegram-bot-api";
import MESSAGES from "../../messages";
import KEYBOARDS from "../../keyboards";

const changeNameEmptyListener = async (bot: TelegramBot, msg: Message) => {
   try {
       await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.COMPANY_RENAME_TOOLTIP, {reply_markup: {inline_keyboard: KEYBOARDS.COMPANY_CHANGE_NAME_TOOLTIP}})
   }
   catch (e) {
       console.log(e)
   }
}

export default changeNameEmptyListener