interface DepthOfMarketSchema {
    buy: {
        [K: string]: number
    },
    sell: {
        [K: string]: number
    }
}

export default DepthOfMarketSchema