import TelegramBot from "node-telegram-bot-api";
import KEYBOARDS from "../../keyboards";
import MESSAGES from "../../messages";
import getUserData from "../../pocketbase/getUserData";

const StartMessageListener = async (bot: TelegramBot, from: number) => {
    try {
        const userData = await getUserData(from)
        await bot.sendMessage(from, MESSAGES.RU.START_MESSAGE)
        await bot.sendMessage(from, MESSAGES.RU.START_MESSAGE_2, {reply_markup: {
                keyboard: KEYBOARDS.DEFAULT(userData.coordinates),
                resize_keyboard: true
            }})
    }
    catch (e) {
        console.log(e)
    }
}

export default StartMessageListener