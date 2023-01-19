import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import checkCoordinatesValid from "../../misc/checkCoordinatesValid";
import MESSAGES from "../../messages";
import getUserData from "../../pocketbase/getUserData";
import colonyDataDefaultConstant from "../../constants/colonyDataDefault.constant";
import systemGenerator from "../../generators/system.generator";
import colonyCreate from "../../pocketbase/colonyCreate";
import updateUserData from "../../pocketbase/updateUserData";
import KEYBOARDS from "../../keyboards";

const onFoundColonyHereCallbackListener = async (bot: TelegramBot, query: CallbackQuery, coordinates: string, planetIndex: number) => {
    try {
        const c = coordinates.split(':')
        if(!checkCoordinatesValid(c[0], c[1])) return await bot.sendMessage(query.from.id, MESSAGES.RU.INVALID_COORDINATES)
        const userData = await getUserData(query.from.id, true)
        if(userData.coordinates !== coordinates) return await bot.sendMessage(query.from.id, MESSAGES.RU.NOT_IN_SELECTED_SYSTEM)
        if((userData.expand?.colonies
            ?.findIndex(x => x.coordinates.system === coordinates && x.coordinates.planetIndex === planetIndex) || -1) > -1) return await bot
            .sendMessage(query.from.id, MESSAGES.RU.COLONY_ALREADY_EXISTS)
        const system = systemGenerator(coordinates)
        const colonyData = colonyDataDefaultConstant(system, planetIndex, userData.id || '')
        const colony = await colonyCreate(colonyData)
        if(colony.id) {
            userData.colonies.push(colony.id)
            await updateUserData(userData)
        }
        await bot.sendMessage(
            query.from.id,
            MESSAGES.RU.COLONY_CREATED_SUCCESSFULLY,
            {reply_markup: {inline_keyboard: KEYBOARDS.COLONY_INFO_INLINE(colony.id as string)}}
        )
    }
    catch (e) {
        console.log(e)
    }
}

export default onFoundColonyHereCallbackListener