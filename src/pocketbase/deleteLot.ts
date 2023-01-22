import pb from "./index";

const deleteLot = async (id: string) => {
    try {
        return await pb.collection('market').delete(id)
    }
    catch (e) {
        console.log(e)
    }
}

export default deleteLot