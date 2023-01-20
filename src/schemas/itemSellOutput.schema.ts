import MessagesEnum from "../enums/messages.enum";

interface sellSuccess {
    message: MessagesEnum.ITEM_SELL_SUCCESS,
    count: number,
    summary: number
}

interface lotPlaced {
    message: MessagesEnum.ITEM_SELL_LOT_PLACED,
    count: number,
    price: number
}

interface noLots {
    message: MessagesEnum.ITEM_SELL_MARKET_PRICE_NO_LOTS
}

interface partialSell {
    message: MessagesEnum.ITEM_SELL_PARTIAL_SUCCESS_AND_LOT_PLACED,
    countSold: number,
    countPlaced: number,
    summary: number,
    price: number
}

type ItemSellOutputSchema = sellSuccess | lotPlaced | noLots | partialSell | undefined

export default ItemSellOutputSchema