import TelegramBot, {Message} from "node-telegram-bot-api";
import MESSAGES from "../../messages";
import KEYBOARDS from "../../keyboards";

const onStockMessageListener = async (bot: TelegramBot, msg: Message) => {
    try {
        await bot.sendMessage(
            msg.from?.id || -1,
                MESSAGES.RU.STOCKS_TOOLTIP,
            {reply_markup: {inline_keyboard: KEYBOARDS.STOCKS_TOOLTIP}}
            )
    }
    catch (e) {
        console.log(e)
    }
}

export default onStockMessageListener