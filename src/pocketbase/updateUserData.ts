import pb from "./index";
import UserDataSchema from "../schemas/userData.schema";

const updateUserData = async (userData: UserDataSchema) => {
    try {
        const {id, expand, ...data} = userData
        await pb.collection('tg_users').update(id, data)
    }
    catch (e) {
        console.log(e)
    }
}

export default updateUserData