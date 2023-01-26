import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import getColonyData from "../../pocketbase/getColonyData";
import MESSAGES from "../../messages";
import getUserData from "../../pocketbase/getUserData";
import KEYBOARDS from "../../keyboards";
import calculateCargoLoad from "../../misc/calculateCargoLoad";
import globalConstant from "../../constants/global.constant";
import ResourceEnum from "../../enums/resource.enum";
import ResourcesConstant from "../../constants/resources.constant";
import updateUserData from "../../pocketbase/updateUserData";
import updateColonyData from "../../pocketbase/updateColonyData";

const onColonyCollectListener = async (bot: TelegramBot, query: CallbackQuery, id: string) => {
    try {
        const colonyData = await getColonyData(id)
        if(!colonyData) return await bot.sendMessage(query.from.id, MESSAGES.RU.ERROR_UNKNOWN)
        const userData = await getUserData(query.from.id)
        if(colonyData.owner !== userData.id) return await bot.sendMessage(query.from.id, MESSAGES.RU.NO_ACCESS)
        if(colonyData.coordinates.system !== userData.coordinates) return await bot
            .sendMessage(
                query.from.id,
                MESSAGES.RU.NOT_IN_SELECTED_SYSTEM,
                {reply_markup: {inline_keyboard: KEYBOARDS.SYSTEM_TRAVEL_INLINE(colonyData.coordinates.system)}}
            )
        if(calculateCargoLoad(colonyData.storage) < 1) return await bot
            .sendMessage(query.from.id, MESSAGES.RU.STORAGE_EMPTY);
        (Object.keys(colonyData.storage) as ResourceEnum[]).forEach(x => {
            const totalStoring = calculateCargoLoad(userData.items)
            const allowed = globalConstant.baseShipCargoLoad - totalStoring
            const willCount = Math.min(
                Math.floor(allowed),
                Math.ceil((colonyData.storage[x] || 0) * globalConstant.storageCapacity[ResourcesConstant[x].size])
            );
            (userData.items as any)[x] = (userData.items[x] || 0) + willCount / globalConstant.storageCapacity[ResourcesConstant[x].size];
            (colonyData.storage as any)[x] = (colonyData.storage[x] || 0) - willCount / globalConstant.storageCapacity[ResourcesConstant[x].size]
        })
        await updateUserData(userData)
        await updateColonyData(colonyData)
        await bot.sendMessage(query.from.id, MESSAGES.RU.RESOURCES_COLLECTED)
    }
    catch (e) {
        console.log(e)
    }
}

export default onColonyCollectListener