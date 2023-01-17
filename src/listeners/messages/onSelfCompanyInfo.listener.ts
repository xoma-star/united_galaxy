import TelegramBot, {Message} from "node-telegram-bot-api";
import getUserData from "../../pocketbase/getUserData";
import MESSAGES from "../../messages";
import KEYBOARDS from "../../keyboards";

const onSelfCompanyInfoListener = async (bot: TelegramBot, msg: Message) => {
    const userData = await getUserData(msg.from?.id || -1, true)
    await bot.sendMessage(msg.from?.id || -1,
        MESSAGES.RU.COMPANY_INFO(userData.companyName, userData.created || new Date(), userData.colonies.length),
        {reply_markup: {inline_keyboard: KEYBOARDS.SELF_COMPANY_INFO_INLINE}}
    )
}

export default onSelfCompanyInfoListener