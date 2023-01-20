import pb from "./index";

const removeListing = async (id: string) => {
    try {
        await pb.collection('market').delete(id)
    }
    catch (e) {
        console.log(e)
    }
}

export default removeListing