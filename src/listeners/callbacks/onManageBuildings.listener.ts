import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import getColonyData from "../../pocketbase/getColonyData";
import MESSAGES from "../../messages";
import KEYBOARDS from "../../keyboards";

const onManageBuildingsListener = async (bot: TelegramBot, query: CallbackQuery, id: string) => {
    try {
        const colonyData = await getColonyData(id)
        if(!colonyData) return await bot
            .sendMessage(query.from.id, MESSAGES.RU.ERROR_UNKNOWN)
        if(colonyData.expand?.owner.coordinates !== colonyData.coordinates.system) return bot
            .sendMessage(query.from.id, MESSAGES.RU.NOT_IN_SELECTED_SYSTEM)
        for(const building of colonyData.modules) await bot
            .sendMessage(
                query.from.id,
                MESSAGES.RU.COLONY_BUILDING_INFO(building),
                {reply_markup: {
                    inline_keyboard: building.completed ?
                        [] :
                        KEYBOARDS.BUILDING_MANAGE_INCOMPLETE(colonyData.id as string, building.id)
                }}
            )
    }
    catch (e) {
        console.log(e)
    }
}

export default onManageBuildingsListener