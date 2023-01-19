import TelegramBot, {Message} from "node-telegram-bot-api";
import getUserData from "../../pocketbase/getUserData";
import MESSAGES from "../../messages";
import KEYBOARDS from "../../keyboards";

const onSystemInfoListener = async (bot: TelegramBot, message: Message) => {
    try {
        const userData = await getUserData(message.from?.id || -1)
        await bot.sendMessage(message.from?.id || -1,
            MESSAGES.RU.SYSTEM_INFO_SELF(userData.coordinates),
            {reply_markup: {
                    inline_keyboard: KEYBOARDS.PLANET_SCANNER_INLINE(userData.coordinates)
                }}
        )
    }
    catch (e) {
        console.log(e)
    }
}

export default onSystemInfoListener