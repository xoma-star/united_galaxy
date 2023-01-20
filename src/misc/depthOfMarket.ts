import marketItemSchema from "../schemas/marketItem.schema";
import DepthOfMarketSchema from "../schemas/depthOfMarket.schema";

const depthOfMarket = (listing: marketItemSchema, depth: number): DepthOfMarketSchema => {
    const buySorted = listing.buy.sort((a, b) => a.price < b.price ? -1 : 1)
    const sellSorted = listing.sell.sort((a, b) => a.price > b.price ? -1 : 1)
    let buy: {[K: string]: number} = {}
    let sell: {[K: string]: number} = {}
    while(Object.keys(buy).length < depth) {
        const val = buySorted.pop()
        if(!val) break
        buy[val.price.toString()] = (buy[val.price.toString()] || 0) + val.count
    }
    while(Object.keys(sell).length < depth) {
        const val = sellSorted.pop()
        if(!val) break
        sell[val.price.toString()] = (sell[val.price.toString()] || 0) + val.count
    }
    console.log(buy, sell)
    return {
        buy,
        sell
    }
}

export default depthOfMarket