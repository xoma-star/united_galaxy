import TelegramBot, {Message} from "node-telegram-bot-api";
import MESSAGES from "../../messages";
import getColonyData from "../../pocketbase/getColonyData";
import checkColonyReady from "../../misc/checkColonyReady";
import stringSimilarity from "string-similarity";
import ResourcesConstant from "../../constants/resources.constant";
import ResourceEnum from "../../enums/resource.enum";
import resourceEnum from "../../enums/resource.enum";
import updateColonyData from "../../pocketbase/updateColonyData";
import KEYBOARDS from "../../keyboards";
import systemGenerator from "../../generators/system.generator";

const onExtractResourceListener = async (bot: TelegramBot, msg: Message, regex: RegExpExecArray | null) => {
    try {
        if(!regex) return await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.ERROR_UNKNOWN)
        const split = regex[1].split(' ')
        const id = split[0]
        const bestMessage = stringSimilarity.findBestMatch(split.slice(1).join(' ') || '',
            (Object.keys(ResourcesConstant) as ResourceEnum[]).map(x => ResourcesConstant[x].name)
        )
        const itemName = (Object.keys(ResourcesConstant) as ResourceEnum[]).find(x => ResourcesConstant[x].name === bestMessage.bestMatch.target)
        if(bestMessage.bestMatch.rating < 0.6) return await bot
            .sendMessage(
                msg.from?.id || -1,
                MESSAGES.RU.ITEM_NOT_FOUND(bestMessage.bestMatch.target)
            )
        const colonyData = await getColonyData(id)
        if(!colonyData) return await bot
            .sendMessage(msg.from?.id || -1, MESSAGES.RU.COLONY_NOT_FOUND)
        if(colonyData.expand?.owner.tg_id !== msg.from?.id) return await bot
            .sendMessage(msg.from?.id || -1, MESSAGES.RU.NO_ACCESS)
        if(colonyData.expand?.owner.coordinates !== colonyData.coordinates.system) return await bot
            .sendMessage(
                msg.from?.id || -1,
                MESSAGES.RU.NOT_IN_SELECTED_SYSTEM,
                {reply_markup: {inline_keyboard: KEYBOARDS.SYSTEM_TRAVEL_INLINE(colonyData.coordinates.system)}}
            )
        if(!checkColonyReady(colonyData)) return await bot
            .sendMessage(msg.from?.id || -1, MESSAGES.RU.NO_NEEDED_MODULES)
        const system = systemGenerator(colonyData.coordinates.system)
        const planet = system.planets[colonyData.coordinates.planetIndex]
        if(planet.resources.indexOf(itemName as ResourceEnum) < 0) return await bot
            .sendMessage(
                msg.from?.id || -1,
                MESSAGES.RU.RESOURCE_NOT_AVAILABLE_ON_PLANET,
                {reply_markup: {inline_keyboard: KEYBOARDS.PLANET_SCANNER_INLINE(colonyData.coordinates.system)}}
            )
        colonyData.extractingResource = itemName as resourceEnum
        await updateColonyData(colonyData)
        await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.EXTRACTING_RESOURCE_CHANGED(itemName as ResourceEnum))
    }
    catch (e) {
        console.log(e)
    }
}

export default onExtractResourceListener