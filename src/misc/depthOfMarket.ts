import marketItemSchema from "../schemas/marketItem.schema";
import DepthOfMarketSchema from "../schemas/depthOfMarket.schema";

const depthOfMarket = (listing: marketItemSchema, depth: number): DepthOfMarketSchema => {
    const buySorted = listing.buy
    const sellSorted = listing.sell
    let buy: { price: number, count: number }[] = []
    let sell: { price: number, count: number }[] = []
    while(buySorted.length > 0) {
        const val = buySorted.pop()
        if(!val) break
        const idx = buy.findIndex(x => x.price === val.price)
        if(idx > -1) buy[idx] = {price: buy[idx].price, count: buy[idx].count + val.count}
        else buy.push({price: val.price, count: val.count})
    }
    while(sellSorted.length > 0) {
        const val = sellSorted.pop()
        if(!val) break
        const idx = sell.findIndex(x => x.price === val.price)
        if(idx > -1) sell[idx] = {price: sell[idx].price, count: sell[idx].count + val.count}
        else sell.push({price: val.price, count: val.count})
    }
    return {
        buy: buy.sort((a, b) => a.price > b.price ? -1 : 1).slice(0, depth),
        sell: sell.sort((a, b) => a.price < b.price ? -1 : 1).slice(0, depth)
    }
}

export default depthOfMarket