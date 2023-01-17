import TelegramBot, {Message} from "node-telegram-bot-api";
import MESSAGES from "../../messages";
import KEYBOARDS from "../../keyboards";
import getUserData from "../../pocketbase/getUserData";
import updateUserData from "../../pocketbase/updateUserData";

const onChangeNameListener = async (bot: TelegramBot, msg: Message, regex: RegExpExecArray | null) => {
    try {
        if(!regex || !regex[1]) return await bot
            .sendMessage(msg.from?.id || -1, MESSAGES.RU.COMPANY_RENAME_TOOLTIP, {reply_markup: {inline_keyboard: KEYBOARDS.COMPANY_CHANGE_NAME_TOOLTIP}})
        const newName = regex[1]
            .replace(/[^aA-zZаА-яЯ+ ]/g, '')
            .replace('_', '')
            .replace(/\s\s+/g, ' ')
            .trim()
        if(newName.length < 1) return await bot
            .sendMessage(msg.from?.id || -1, MESSAGES.RU.RENAME_FORMAT_ERROR, {reply_markup: {inline_keyboard: KEYBOARDS.COMPANY_CHANGE_NAME_TOOLTIP}})
        if(newName.length > 64) return await bot
            .sendMessage(msg.from?.id || -1, MESSAGES.RU.RENAME_TOO_LONG, {reply_markup: {inline_keyboard: KEYBOARDS.COMPANY_CHANGE_NAME_TOOLTIP}})
        const userData = await getUserData(msg.from?.id || -1)
        userData.companyName = newName
        await updateUserData(userData)
        return await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.RENAME_SUCCESS(newName))
    }
    catch (e) {
        console.log(e)
    }
}

export default onChangeNameListener