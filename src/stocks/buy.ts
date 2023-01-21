import ResourceEnum from "../enums/resource.enum";
import getItemListing from "../pocketbase/getItemListing";
import MessagesEnum from "../enums/messages.enum";
import createTransaction from "../pocketbase/createTransaction";
import getUserData from "../pocketbase/getUserData";
import updateUserData from "../pocketbase/updateUserData";
import removeListing from "../pocketbase/removeListing";
import ItemBuyOutputSchema from "../schemas/itemBuyOutput.schema";
import {itemStockList} from "../schemas/marketItem.schema";
import createListing from "../pocketbase/createListing";
import TelegramBot from "node-telegram-bot-api";
import MESSAGES from "../messages";

const buyItem = async (bot: TelegramBot, id: string, item: ResourceEnum, count: number, price?: number): Promise<ItemBuyOutputSchema> => {
    try {
        const totalSpending: {count: number, price: number}[] = []
        const listing = await getItemListing(item)
        if(!listing) return {message: MessagesEnum.ITEM_BUY_MARKET_PRICE_NO_LOTS}
        const userData = await getUserData(id)
        const sellSorted = listing.sell
            .filter(x => x.seller !== id)
            .filter(x => x.price <= (price || Infinity))
            .sort((a, b) => a.price > b.price ? -1 : 1)

        while(sellSorted.length > 0 && count > 0 && userData.balance > 0){
            const lot = sellSorted.pop()
            if(typeof lot === 'undefined') break
            const delta = Math.min(lot.count, count, Math.floor(userData.balance / lot.price))
            lot.count = lot.count - delta
            count = count - delta
            totalSpending.push({count: delta, price: lot.price})
            await createTransaction({
                agent: id,
                contragent: lot.seller,
                agents_items: {
                    MONEY: delta * lot.price
                },
                contragents_items: {
                    [item]: delta
                }
            })
            const contragentData = await getUserData(lot.seller)
            contragentData.balance += delta * lot.price
            contragentData.items = {
                ...contragentData.items,
                [item]: (contragentData.items[item] || 0) - delta
            }
            await bot.sendMessage(contragentData.tg_id, MESSAGES.RU.CONTRAGENT_SELL(delta, lot.price, item))
            await updateUserData(contragentData)
            userData.balance -= delta * lot.price;
            (userData.items as any)[item] += delta
            if(lot.count === 0){
                await removeListing(lot.id as string)
            }
            else if(userData.balance < lot.price || userData.balance < (price || 0)) {

            }
            else{
                sellSorted.push(lot)
            }
        }
        const summary = totalSpending.map(x => x.price * x.count).reduce((a,b) => a + b, 0)
        const countSold = totalSpending.map(x => x.count).reduce((a,b) => a + b, 0)
        await updateUserData(userData)
        if(count > 0 && price) {
            const listing: itemStockList = {
                price,
                seller: id,
                type: 'bid',
                count,
                itemName: item
            }
            await createListing(listing)
            if(countSold > 0) {
                return {
                    message: MessagesEnum.ITEM_BUY_PARTIAL_SUCCESS_AND_LOT_PLACED,
                    summary: summary,
                    countBought: countSold,
                    price: price,
                    countPlaced: count
                }
            }
        }
        else{
            if(countSold > 0) {
                return {
                    message: MessagesEnum.PARTIAL_BUY_MARKET,
                    summary: summary,
                    count: countSold
                }
            }
        }
        if(count === 0) return {
            message: MessagesEnum.ITEM_BUY_SUCCESS,
            count: countSold,
            summary: summary
        }
        if(countSold === 0 && price) return {
            message: MessagesEnum.ITEM_BUY_LOT_PLACED,
            price: price,
            count: count
        }
        if(countSold === 0 && !price) return {
            message: MessagesEnum.ITEM_BUY_MARKET_PRICE_NO_LOTS
        }
    }
    catch (e) {
        console.log(e)
    }
}

export default buyItem