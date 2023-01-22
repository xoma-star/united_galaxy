import {itemStockList} from "../schemas/marketItem.schema";
import pb from "./index";

const getLotData = async (id: string): Promise<itemStockList | undefined> => {
    try {
        return await pb.collection('market').getOne(id)
    }
    catch (e) {
        console.log(e)
    }
}

export default getLotData