import MessagesEnum from "../enums/messages.enum";

interface buySuccess {
    message: MessagesEnum.ITEM_BUY_SUCCESS,
    count: number,
    summary: number
}

interface lotPlaced {
    message: MessagesEnum.ITEM_BUY_LOT_PLACED,
    count: number,
    price: number
}

interface noLots {
    message: MessagesEnum.ITEM_BUY_MARKET_PRICE_NO_LOTS | MessagesEnum.STORAGE_FULL
}

interface partialBuy {
    message: MessagesEnum.ITEM_BUY_PARTIAL_SUCCESS_AND_LOT_PLACED,
    countBought: number,
    countPlaced: number,
    summary: number,
    price: number
}

interface partialMarket {
    message: MessagesEnum.PARTIAL_BUY_MARKET,
    count: number,
    summary: number
}

type ItemBuyOutputSchema = buySuccess | lotPlaced | noLots | partialBuy | partialMarket | undefined

export default ItemBuyOutputSchema