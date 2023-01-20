import ResourceEnum from "../enums/resource.enum";
import pb from "./index";
import MarketItemSchema, {itemStockList} from "../schemas/marketItem.schema";

const getItemListing = async (itemName: ResourceEnum): Promise<MarketItemSchema | undefined> => {
    try {
        const data = await pb.collection('market').getFullList(200, {
            filter: `itemName="${itemName}"`
        })
        return {
            buy: data.filter((x: itemStockList) => x.type === 'bid'),
            sell: data.filter((x: itemStockList) => x.type === 'ask'),
            resource: itemName
        }
    }
    catch (e) {
        console.log(e)
    }
}

export default getItemListing