import TelegramBot, {Message} from "node-telegram-bot-api";
import getUserData from "../pocketbase/getUserData";
import MESSAGES from "../messages";

const onSelfCompanyInfoListener = async (bot: TelegramBot, msg: Message) => {
    const userData = await getUserData(msg.from?.id || -1)
    await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.COMPANY_INFO(userData.companyName, userData.created || new Date(), userData.colonies.length))
}

export default onSelfCompanyInfoListener