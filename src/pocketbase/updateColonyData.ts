import pb from "./index";
import ColonySchema from "../schemas/colony.schema";

const updateColonyData = async (colonyData: ColonySchema) => {
    try {
        const {id, expand, ...data} = colonyData
        await pb.collection('colonies').update(id, data)
    }
    catch (e) {
        console.log(e)
    }
}

export default updateColonyData