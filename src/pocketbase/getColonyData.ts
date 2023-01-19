import pb from "./index";
import ColonySchema from "../schemas/colony.schema";

const getColonyData = async (id: string): Promise<ColonySchema | undefined> => {
    try {
        const query = await pb.collection('colonies').getOne(id, {expand: 'owner'})
        return query as ColonySchema
    }
    catch (e) {
        console.log(e)
    }
}

export default getColonyData