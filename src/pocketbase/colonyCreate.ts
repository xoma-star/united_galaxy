import colonySchema from "../schemas/colony.schema";
import pb from "./index";

const colonyCreate = async (colonyData: colonySchema): Promise<colonySchema> => {
    try {
        return await pb.collection('colonies').create(colonyData)
    }
    catch (e) {
        console.log(e)
        return colonyData
    }
}

export default colonyCreate