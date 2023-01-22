import pb from "./index";
import {itemStockList} from "../schemas/marketItem.schema";

const getUsersLots = async (id: string): Promise<itemStockList[] | undefined> => {
    try {
        return await pb.collection('market').getFullList(200, {filter: `seller="${id}"`})
    }
    catch (e) {
        console.log(e)
    }
}

export default getUsersLots