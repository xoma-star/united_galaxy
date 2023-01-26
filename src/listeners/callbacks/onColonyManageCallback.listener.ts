import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import getColonyData from "../../pocketbase/getColonyData";
import MESSAGES from "../../messages";
import KEYBOARDS from "../../keyboards";

const onColonyManageCallbackListener = async (bot: TelegramBot, query: CallbackQuery, id: string) => {
    try {
        const colonyData = await getColonyData(id)
        if(!colonyData) return await bot
            .sendMessage(query.from.id, MESSAGES.RU.ERROR_UNKNOWN)
        if(colonyData.expand?.owner.coordinates !== colonyData.coordinates.system) return bot
            .sendMessage(query.from.id, MESSAGES.RU.NOT_IN_SELECTED_SYSTEM)
        await bot.sendMessage(query.from.id,
            MESSAGES.RU.COLONY_INFO_FULL(colonyData),
            {reply_markup: {inline_keyboard: KEYBOARDS.COLONY_MANAGE_INLINE(colonyData.id as string)}}
        )
    }
    catch (e) {
        console.log(e)
    }
}

export default onColonyManageCallbackListener