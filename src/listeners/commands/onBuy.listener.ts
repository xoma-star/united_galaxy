import TelegramBot, {Message} from "node-telegram-bot-api";
import MESSAGES from "../../messages";
import KEYBOARDS from "../../keyboards";
import stringSimilarity from "string-similarity";
import ResourcesConstant from "../../constants/resources.constant";
import ResourceEnum from "../../enums/resource.enum";
import getUserData from "../../pocketbase/getUserData";
import MessagesEnum from "../../enums/messages.enum";
import buyItem from "../../stocks/buy";

const onBuyListener = async (bot: TelegramBot, msg: Message, regex: RegExpExecArray | null) => {
    try {
        if(!regex) return await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.ERROR_UNKNOWN)
        let [item, countS, price] = regex[1].split(' ')
        if(typeof item === 'undefined' || typeof countS === 'undefined') return await bot
            .sendMessage(msg.from?.id || -1, MESSAGES.RU.STOCKS_TOOLTIP, {reply_markup: {inline_keyboard: KEYBOARDS.STOCKS_TOOLTIP}})
        let count = parseInt(countS)
        const bestMessage = stringSimilarity.findBestMatch(item.toLowerCase() || '',
            (Object.keys(ResourcesConstant) as ResourceEnum[]).map(x => ResourcesConstant[x].name)
        )
        const itemName = (Object.keys(ResourcesConstant) as ResourceEnum[]).find(x => ResourcesConstant[x].name === bestMessage.bestMatch.target)
        if(bestMessage.bestMatch.rating < 0.6) return await bot
            .sendMessage(
                msg.from?.id || -1,
                MESSAGES.RU.ITEM_NOT_FOUND(bestMessage.bestMatch.target),
                {reply_markup: {inline_keyboard: KEYBOARDS.BUY_TOOLTIP(itemName || ResourceEnum.INDIUM_DRIVE)}}
            )
        if(!itemName) return await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.ERROR_UNKNOWN)
        if(count < 0) return await bot.sendMessage(
            msg.from?.id || -1,
            MESSAGES.RU.MORE_THAN_ZERO,
            {reply_markup: {inline_keyboard: KEYBOARDS.BUY_TOOLTIP(itemName)}}
        )
        const userData = await getUserData(msg.from?.id || -1)
        let priceParsed = undefined
        if(typeof price !== 'undefined') priceParsed = Number(parseFloat(price).toFixed(2))
        const response = await buyItem(bot, userData.id as string, itemName, count, priceParsed)
        switch (response?.message) {
            case MessagesEnum.ITEM_BUY_SUCCESS: return await bot
                .sendMessage(msg.from?.id || -1, MESSAGES.RU.ITEM_BUY_SUCCESS(response.count, response.summary, itemName))
            case MessagesEnum.ITEM_BUY_LOT_PLACED: return await bot
                .sendMessage(msg.from?.id || -1, MESSAGES.RU.ITEM_BUY_LOT_PLACED(response.count, response.price, itemName))
            case MessagesEnum.ITEM_BUY_MARKET_PRICE_NO_LOTS: return await bot
                .sendMessage(msg.from?.id || -1, MESSAGES.RU.ITEM_BUY_MARKET_PRICE_NO_LOTS)
            case MessagesEnum.ITEM_BUY_PARTIAL_SUCCESS_AND_LOT_PLACED: return await bot
                .sendMessage(msg.from?.id || -1, MESSAGES.RU.ITEM_BUY_PARTIAL_SUCCESS_AND_LOT_PLACED(
                    response.countBought, response.countPlaced, response.summary, response.price, itemName
                ))
        }
    }
    catch (e) {
        console.log(e)
    }
}

export default onBuyListener