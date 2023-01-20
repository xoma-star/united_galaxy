import pb from "./index";
import TransactionSchema from "../schemas/transaction.schema";

const createTransaction = async (transaction: TransactionSchema) => {
    try {
        await pb.collection('transactions').create(transaction)
    }
    catch (e) {
        console.log(e)
    }
}

export default createTransaction