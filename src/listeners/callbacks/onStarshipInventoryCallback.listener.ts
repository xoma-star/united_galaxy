import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import getUserData from "../../pocketbase/getUserData";
import MESSAGES from "../../messages";

const onStarshipInventoryCallbackListener = async (bot: TelegramBot, message: CallbackQuery) => {
   try {
       const userData = await getUserData(message.from?.id || -1)
       await bot.sendMessage(message.from?.id || -1, MESSAGES.RU.SHIP_INVENTORY(userData.items))
   }
   catch (e) {
       console.log(e)
   }
}

export default onStarshipInventoryCallbackListener