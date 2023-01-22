import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import getUserData from "../../pocketbase/getUserData";
import systemGenerator from "../../generators/system.generator";
import SystemControlledByEnum from "../../enums/systemControlledBy.enum";
import MESSAGES from "../../messages";
import getLotData from "../../pocketbase/getLotData";
import deleteLot from "../../pocketbase/deleteLot";

const onRemoveLotCallbackListener = async (bot: TelegramBot, query: CallbackQuery, id: string) => {
    try {
        const userData = await getUserData(query.from.id)
        const system = systemGenerator(userData.coordinates)
        if(system.controlledBy !== SystemControlledByEnum.GOVERNMENT) return await bot
            .sendMessage(query.from.id, MESSAGES.RU.STOCK_AVAILABLE_ONLY_GOV)
        const lotData = await getLotData(id)
        if(!lotData || lotData?.seller !== userData.id) return await bot
            .sendMessage(query.from.id, MESSAGES.RU.ERROR_UNKNOWN)
        if(await deleteLot(id)) return await
            bot.sendMessage(query.from.id, MESSAGES.RU.LOT_REMOVED)
    }
    catch (e) {
        console.log(e)
    }
}

export default onRemoveLotCallbackListener