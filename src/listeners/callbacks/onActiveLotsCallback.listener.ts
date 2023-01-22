import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import getUserData from "../../pocketbase/getUserData";
import systemGenerator from "../../generators/system.generator";
import SystemControlledByEnum from "../../enums/systemControlledBy.enum";
import MESSAGES from "../../messages";
import getUsersLots from "../../pocketbase/getUsersLots";
import KEYBOARDS from "../../keyboards";

const onActiveLotsCallbackListener = async (bot: TelegramBot, query: CallbackQuery) => {
    try {
        const userData = await getUserData(query.from.id)
        const system = systemGenerator(userData.coordinates)
        if(system.controlledBy !== SystemControlledByEnum.GOVERNMENT) return await bot
            .sendMessage(query.from.id, MESSAGES.RU.STOCK_AVAILABLE_ONLY_GOV)
        const lots = await getUsersLots(userData.id as string)
        if(!lots || (lots?.length || 0) < 1) return await bot
            .sendMessage(query.from.id, MESSAGES.RU.NO_ACTIVE_LOTS)
        for(const lot of lots) await bot
            .sendMessage(
                query.from.id,
                MESSAGES.RU.LOT_MANAGE(lot.type, lot.count, lot.price, lot.itemName),
                {reply_markup: {inline_keyboard: KEYBOARDS.LOT_MANAGE_KEYBOARD(lot.id as string)}}
            )
    }
    catch (e) {
        console.log(e)
    }
}

export default onActiveLotsCallbackListener