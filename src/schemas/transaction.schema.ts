import ResourceEnum from "../enums/resource.enum";

interface TransactionSchema {
    id?: string,
    created?: Date,
    agent: string,
    contragent: string,
    agents_items: {
        [K in keyof typeof ResourceEnum]?: number
    },
    contragents_items: {
        [K in keyof typeof ResourceEnum]?: number
    }
}

export default TransactionSchema