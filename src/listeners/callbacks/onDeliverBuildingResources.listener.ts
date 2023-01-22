import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import getColonyData from "../../pocketbase/getColonyData";
import MESSAGES from "../../messages";
import KEYBOARDS from "../../keyboards";
import ResourceEnum from "../../enums/resource.enum";
import updateUserData from "../../pocketbase/updateUserData";
import updateColonyData from "../../pocketbase/updateColonyData";

const onDeliverBuildingResourcesListener = async (bot: TelegramBot, query: CallbackQuery, colonyId: string, buildingId: string) => {
    try {
        const colonyData = await getColonyData(colonyId)
        if(typeof colonyData === 'undefined') return await bot
            .sendMessage(query.from.id, MESSAGES.RU.ERROR_UNKNOWN)
        const userData = colonyData.expand?.owner.find(x => x.tg_id === query.from.id)
        if(typeof userData === 'undefined') return await bot
            .sendMessage(query.from.id, MESSAGES.RU.ERROR_UNKNOWN)
        if(colonyData.coordinates.system !== userData.coordinates) return await bot
            .sendMessage(
                query.from.id,
                MESSAGES.RU.NOT_IN_SELECTED_SYSTEM,
                {reply_markup: {inline_keyboard: KEYBOARDS.TRAVEL_TO_SYSTEM_TOOLTIP(colonyData.coordinates.system)}}
            )
        const buildingIndex = colonyData.modules.findIndex(x => x.id === buildingId)
        if(buildingIndex < 0) return await bot
            .sendMessage(query.from.id, MESSAGES.RU.ERROR_UNKNOWN)
        let resourcesRequired = colonyData.modules[buildingIndex].resourcesRequired;
        for(const x of (Object.keys(resourcesRequired) as ResourceEnum[])){
            const spending = Math.min(resourcesRequired[x] || 0, userData.items[x] || 0);
            if(typeof userData.items[x] !== 'undefined'){
                (userData.items as any)[x] -= spending;
                (resourcesRequired as any)[x] -= spending
            }
            await bot.sendMessage(query.from.id, MESSAGES.RU.COLONY_BUILDING_DELIVERED_LEFT(x, (resourcesRequired[x] || 0)))
        }
        colonyData.modules[buildingIndex].resourcesRequired = resourcesRequired
        if((Object.keys(resourcesRequired) as ResourceEnum[]).every(x => resourcesRequired[x] === 0)) {
            colonyData.modules[buildingIndex].completed = true
            await bot
                .sendMessage(query.from.id, MESSAGES.RU.COLONY_BUILDING_DONE)
        }
        await updateUserData(userData)
        await updateColonyData(colonyData)
    }
    catch (e) {
        console.log(e)
    }
}

export default onDeliverBuildingResourcesListener