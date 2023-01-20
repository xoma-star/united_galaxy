import pb from "./index";
import UserDataSchema from "../schemas/userData.schema";
import signupUser from "./signupUser";
import UserDataDefaultConstant from "../constants/userDataDefault.constant";

const getUserData = async (tg_id: number | string, expandColonies: boolean = false): Promise<UserDataSchema> => {
    try {
        if(typeof tg_id === 'string'){
            return await pb.collection('tg_users').getOne(tg_id)
        }
        else{
            const list = await pb.collection('tg_users').getList(1, 1, {
                filter: `tg_id = ${tg_id}`,
                expand: expandColonies ? 'colonies' : ''
            })
            return (list.items[0] || await signupUser(tg_id)) as UserDataSchema
        }

    } catch (e) {
        console.log(e)
        return UserDataDefaultConstant(parseInt(tg_id as string))
    }
}

export default getUserData