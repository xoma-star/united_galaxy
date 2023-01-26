import TelegramBot, {Message} from "node-telegram-bot-api";
import stringSimilarity from "string-similarity";
import ResourcesConstant from "../../constants/resources.constant";
import ResourceEnum from "../../enums/resource.enum";
import MESSAGES from "../../messages";

const onItemInfoListener = async (bot: TelegramBot, msg: Message, regex: RegExpExecArray | null) => {
    try {
        if(!regex) return await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.ERROR_UNKNOWN)
        const bestMessage = stringSimilarity.findBestMatch(regex[1] || '',
            (Object.keys(ResourcesConstant) as ResourceEnum[]).map(x => ResourcesConstant[x].name)
        )
        const itemName = (Object.keys(ResourcesConstant) as ResourceEnum[]).find(x => ResourcesConstant[x].name === bestMessage.bestMatch.target)
        if(bestMessage.bestMatch.rating < 0.6) return await bot
            .sendMessage(
                msg.from?.id || -1,
                MESSAGES.RU.ITEM_NOT_FOUND(bestMessage.bestMatch.target)
            )
        await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.ITEM_INFO(itemName as ResourceEnum))
    }
    catch (e) {

    }
}

export default onItemInfoListener