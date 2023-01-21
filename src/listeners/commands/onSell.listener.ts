import TelegramBot, {Message} from "node-telegram-bot-api";
import MESSAGES from "../../messages";
import KEYBOARDS from "../../keyboards";
import stringSimilarity from "string-similarity";
import ResourcesConstant from "../../constants/resources.constant";
import ResourceEnum from "../../enums/resource.enum";
import getUserData from "../../pocketbase/getUserData";
import sellItem from "../../stocks/sell";
import MessagesEnum from "../../enums/messages.enum";
import systemGenerator from "../../generators/system.generator";
import SystemControlledByEnum from "../../enums/systemControlledBy.enum";


const onSellListener = async (bot: TelegramBot, msg: Message, regex: RegExpExecArray | null) => {
    try {
        if(!regex) return await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.ERROR_UNKNOWN)
        const split = regex[1].split(' ')
        const numbersLength = split.filter(x => !isNaN(parseFloat(x))).length
        let price = undefined, countS, item
        if(numbersLength === 2) {
            price = split.pop()
        }
        countS = split.pop()
        item = split.join(' ')
        if(typeof item === 'undefined' || typeof countS === 'undefined') return await bot
            .sendMessage(msg.from?.id || -1, MESSAGES.RU.STOCKS_TOOLTIP, {reply_markup: {inline_keyboard: KEYBOARDS.STOCKS_TOOLTIP}})
        let count = parseInt(countS)
        const bestMessage = stringSimilarity.findBestMatch(item || '',
            (Object.keys(ResourcesConstant) as ResourceEnum[]).map(x => ResourcesConstant[x].name)
        )
        const itemName = (Object.keys(ResourcesConstant) as ResourceEnum[]).find(x => ResourcesConstant[x].name === bestMessage.bestMatch.target)
        if(bestMessage.bestMatch.rating < 0.6) return await bot
            .sendMessage(
                msg.from?.id || -1,
                MESSAGES.RU.ITEM_NOT_FOUND(bestMessage.bestMatch.target),
                {reply_markup: {inline_keyboard: KEYBOARDS.SELL_TOOLTIP(itemName || ResourceEnum.INDIUM_DRIVE)}}
            )
        if(!itemName) return await bot.sendMessage(msg.from?.id || -1, MESSAGES.RU.ERROR_UNKNOWN)
        if(count < 0) return await bot.sendMessage(
            msg.from?.id || -1,
            MESSAGES.RU.MORE_THAN_ZERO,
            {reply_markup: {inline_keyboard: KEYBOARDS.SELL_TOOLTIP(itemName)}}
        )
        const userData = await getUserData(msg.from?.id || -1)
        const system = systemGenerator(userData.coordinates)
        if(system.controlledBy !== SystemControlledByEnum.GOVERNMENT) return await bot
            .sendMessage(msg.from?.id || -1, MESSAGES.RU.STOCK_AVAILABLE_ONLY_GOV)
        const willLeft = (userData.items[itemName] || 0) - count
        if(willLeft < 0) return await bot.sendMessage(
            msg.from?.id || -1,
            MESSAGES.RU.NOT_ENOUGH_ITEMS,
            {reply_markup: {inline_keyboard: KEYBOARDS.SELL_TOOLTIP(itemName)}}
        );
        (userData.items as any)[itemName] = willLeft
        let priceParsed = undefined
        if(typeof price !== 'undefined') priceParsed = Number(parseFloat(price).toFixed(2))
        const response = await sellItem(bot, userData.id as string, itemName, count, priceParsed)
        switch (response?.message) {
            case MessagesEnum.ITEM_SELL_SUCCESS: return await bot
                .sendMessage(msg.from?.id || -1, MESSAGES.RU.ITEM_SELL_SUCCESS(response.count, response.summary, itemName))
            case MessagesEnum.ITEM_SELL_LOT_PLACED: return await bot
                .sendMessage(msg.from?.id || -1, MESSAGES.RU.ITEM_SELL_LOT_PLACED(response.count, response.price, itemName))
            case MessagesEnum.ITEM_SELL_MARKET_PRICE_NO_LOTS: return await bot
                .sendMessage(msg.from?.id || -1, MESSAGES.RU.ITEM_SELL_MARKET_PRICE_NO_LOTS)
            case MessagesEnum.ITEM_SELL_PARTIAL_SUCCESS_AND_LOT_PLACED: return await bot
                .sendMessage(msg.from?.id || -1, MESSAGES.RU.ITEM_SELL_PARTIAL_SUCCESS_AND_LOT_PLACED(
                    response.countSold, response.countPlaced, response.summary, response.price, itemName
                ))
            case MessagesEnum.PARTIAL_SELL_MARKET: return await bot
                .sendMessage(msg.from?.id || -1, MESSAGES.RU.PARTIAL_SELL_MARKET(response.count, response.summary, itemName))
        }
    }
    catch (e) {
        console.log(e)
    }
}

export default onSellListener