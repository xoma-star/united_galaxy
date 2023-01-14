import userDataSchema from "../schemas/userData.schema";
import pb from "./index";
import userDataDefaultConstant from "../constants/userDataDefault.constant";

const signupUser = async (tg_id: number): Promise<userDataSchema> => {
    try {
        return await pb.collection('tg_users').create(userDataDefaultConstant(tg_id))
    }
    catch (e) {
        throw(e)
    }
}

export default signupUser