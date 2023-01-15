import pb from "./index";
import UserDataSchema from "../schemas/userData.schema";
import signupUser from "./signupUser";

const getUserData = async (tg_id: number, messageFrom?: number): Promise<UserDataSchema> => {
    try {
        const list = await pb.collection('tg_users').getList(1, 1, {
            filter: `tg_id = ${tg_id}`
        })

        return (list.items[0] || await signupUser(tg_id)) as UserDataSchema
    } catch (e) {
        console.log(e)
        throw new Error('Неизвестная ошибка')
    }
}

export default getUserData