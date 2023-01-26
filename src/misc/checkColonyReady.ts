import ColonySchema from "../schemas/colony.schema";

const checkColonyReady = (colony: ColonySchema) => {
    return colony.modules.every(x => x.completed === true)
}

export default checkColonyReady