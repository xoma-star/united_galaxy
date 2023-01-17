import TelegramBot, {CallbackQuery, Message} from "node-telegram-bot-api";
import getUserData from "../../pocketbase/getUserData";
import calculateDistance from "../../misc/calculateDistance";
import checkCoordinatesValid from "../../misc/checkCoordinatesValid";
import MESSAGES from "../../messages";
import globalConstant from "../../constants/global.constant";
import systemGenerator from "../../generators/system.generator";
import SystemEnum from "../../enums/system.enum";
import resourceEnum from "../../enums/resource.enum";
import updateUserData from "../../pocketbase/updateUserData";
import KEYBOARDS from "../../keyboards";

const onStarshipMoveConfirm = async (bot: TelegramBot, query: CallbackQuery, coordinates: string) => {
    try {
        const userData = await getUserData(query.from.id)
        if(!checkCoordinatesValid(coordinates.split(':')[0], coordinates.split(':')[1])) return await bot
            .sendMessage(query.from.id, MESSAGES.RU.INVALID_COORDINATES)
        if(userData.shipTechnologies.indexOf(resourceEnum.WARP_DRIVE) < 0) return await bot.sendMessage(query.from.id, MESSAGES.RU.WARP_DRIVE_REQUIRED)
        const distance = calculateDistance(userData.coordinates, coordinates)
        if(distance === 0) return await bot.sendMessage(query.from.id, MESSAGES.RU.MOVE_TO_SAME_PLACE)
        const required = Math.floor(distance * globalConstant.hyperFuelPerYear)
        const have = (userData.items.HYPER_FUEL || 0)
        const willRemain = have - required
        if(willRemain < 0) return await bot.sendMessage(query.from.id, MESSAGES.RU.NOT_ENOUGH_FUEL(have, required))
        const system = systemGenerator(coordinates)
        if(system.type === SystemEnum.GREEN && userData.shipTechnologies.indexOf(resourceEnum.INDIUM_DRIVE) < 0) return await bot
            .sendMessage(query.from.id, MESSAGES.RU.INDIUM_DRIVE_REQUIRED)
        if(system.type === SystemEnum.RED && userData.shipTechnologies.indexOf(resourceEnum.CADMIUM_DRIVE) < 0) return await bot
            .sendMessage(query.from.id, MESSAGES.RU.CADMIUM_DRIVE_REQUIRED)
        if(system.type === SystemEnum.BLUE && userData.shipTechnologies.indexOf(resourceEnum.COBALT_DRIVE) < 0) return await bot
            .sendMessage(query.from.id, MESSAGES.RU.COBALT_DRIVE_REQUIRED)
        const dmsg = await bot.sendMessage(query.from.id, MESSAGES.RU.STARSHIP_DEPARTURE)
        let msg: Message
        setTimeout(async () => msg = await bot.sendAnimation(query.from.id, 'https://media.tenor.com/683E3aJ7G2gAAAAd/warp-republic.gif'), 2500)
        setTimeout(async () => {
            await bot.deleteMessage(msg.chat.id, msg.message_id.toString())
            await bot.deleteMessage(dmsg.chat.id, dmsg.message_id.toString())
            let newData = {...userData};
            (newData as any).items.HYPER_FUEL = have - required
            newData.coordinates = coordinates
            await updateUserData(newData)
            await bot.sendMessage(query.from.id, `Вы в системе ${coordinates}`, {reply_markup: {keyboard: KEYBOARDS.DEFAULT(coordinates), resize_keyboard: true}})
        }, 15000)
    } catch (e) {
        console.log(e)
    }
}

export default onStarshipMoveConfirm