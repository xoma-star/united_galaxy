import ResourceEnum from "../enums/resource.enum";
import ColonySchema from "./colony.schema";

interface UserDataSchema{
    id?: string,
    created?: Date,
    tg_id: number,
    coordinates: string,
    items: {
        [K in keyof typeof ResourceEnum]?: number
    },
    transactions: string[],
    shipTechnologies: ResourceEnum[],
    balance: number,
    companyName: string,
    colonies: string[],
    bounty: number,
    expand?: {
        colonies?: ColonySchema[]
    }
}

export default UserDataSchema