import pb from "./index";
import {itemStockList} from "../schemas/marketItem.schema";

const createListing = async (list: itemStockList): Promise<itemStockList | undefined> => {
    try {
        const {id, ...data} = list
        return await pb.collection('market').create(data)
    }
    catch (e) {
        console.log(e)
    }
}

export default createListing