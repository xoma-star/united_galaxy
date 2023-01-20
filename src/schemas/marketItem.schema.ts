import ResourceEnum from "../enums/resource.enum";

export interface itemStockList{
    price: number,
    count: number,
    seller: string,
    type: 'ask' | 'bid',
    id?: string,
    itemName: ResourceEnum
}

interface MarketItemSchema {
    resource: ResourceEnum,
    buy: itemStockList[],
    sell: itemStockList[]
}

export default MarketItemSchema