import TelegramBot, {Message} from "node-telegram-bot-api";
import stringSimilarity from 'string-similarity'
import ResourcesConstant from "../../constants/resources.constant";
import ResourceEnum from "../../enums/resource.enum";
import MESSAGES from "../../messages";
import KEYBOARDS from "../../keyboards";
import getItemListing from "../../pocketbase/getItemListing";

const onItemListListener = async (bot: TelegramBot, msg: Message, regex: RegExpExecArray | null) => {
    try {
        if(!regex) return await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.ERROR_UNKNOWN)
        const bestMessage = stringSimilarity.findBestMatch(regex[1]?.toLowerCase() || '',
            (Object.keys(ResourcesConstant) as ResourceEnum[]).map(x => ResourcesConstant[x].name)
        )
        const itemName = (Object.keys(ResourcesConstant) as ResourceEnum[]).find(x => ResourcesConstant[x].name === bestMessage.bestMatch.target)
        if(bestMessage.bestMatch.rating < 0.6) return await bot
            .sendMessage(
                msg.from?.id || -1,
                MESSAGES.RU.ITEM_NOT_FOUND(bestMessage.bestMatch.target),
                {reply_markup: {inline_keyboard: KEYBOARDS.ITEM_LISTING_TOOLTIP(itemName || ResourceEnum.INDIUM_DRIVE)}}
            )
        if(!itemName) return
        const itemListing = await getItemListing(itemName)
        if(typeof itemListing === 'undefined') return
        await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.ITEM_LISTING(itemListing))
    }
    catch (e) {
        console.log(e)
    }
}

export default onItemListListener