interface DepthOfMarketSchema {
    buy: { price: number, count: number }[],
    sell: { price: number, count: number }[]
}

export default DepthOfMarketSchema