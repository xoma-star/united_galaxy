import TelegramBot, {Message} from "node-telegram-bot-api";
import stringSimilarity from "string-similarity";
import ResourcesConstant from "../../constants/resources.constant";
import ResourceEnum from "../../enums/resource.enum";
import MESSAGES from "../../messages";
import getUserData from "../../pocketbase/getUserData";
import updateUserData from "../../pocketbase/updateUserData";

const onItemCraftListener = async (bot: TelegramBot, msg: Message, regex: RegExpExecArray | null) => {
    try {
        if(!regex) return await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.ERROR_UNKNOWN)
        let count = parseInt(regex[1].split(' ').pop() as string)
        if(!isNaN(count)) regex[1] = regex[1].split(' ').slice(0, -1).join(' ')
        count = count || 1
        const bestMessage = stringSimilarity.findBestMatch(regex[1] || '',
            (Object.keys(ResourcesConstant) as ResourceEnum[]).map(x => ResourcesConstant[x].name)
        )
        const itemName = (Object.keys(ResourcesConstant) as ResourceEnum[]).find(x => ResourcesConstant[x].name === bestMessage.bestMatch.target)
        if(bestMessage.bestMatch.rating < 0.6) return await bot
            .sendMessage(
                msg.from?.id || -1,
                MESSAGES.RU.ITEM_NOT_FOUND(bestMessage.bestMatch.target)
            )
        const craftRequirements = ResourcesConstant[itemName as ResourceEnum].craft
        const modulesRequired = ResourcesConstant[itemName as ResourceEnum].craftModuleRequired || []
        if(typeof craftRequirements === 'undefined') return await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.NOT_CRAFTABLE)
        const userData = await getUserData(msg.from?.id || -1)
        if(!modulesRequired?.every(x => userData.shipTechnologies.indexOf(x) > -1)) return await bot
            .sendMessage(msg.from?.id || -1, MESSAGES.RU.NO_NEEDED_MODULES);
        (Object.keys(craftRequirements) as ResourceEnum[])
            .forEach(x => (userData.items as any)[x] = (userData.items[x] || 0) - (craftRequirements[x] || 0) * count)
        if(!(Object.keys(userData.items) as ResourceEnum[]).every(x => (userData.items[x] || 0) >= 0)) return await bot
            .sendMessage(msg.from?.id || -1, MESSAGES.RU.NOT_ENOUGH_ITEMS);
        (userData.items as any)[itemName as ResourceEnum] = (userData.items[itemName as ResourceEnum] || 0) + count
        await updateUserData(userData)
        await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.CRAFT_SUCCESS(itemName as ResourceEnum, count))
    }
    catch (e) {

    }
}

export default onItemCraftListener