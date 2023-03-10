import seedrandom from "seedrandom";
import userDataSchema from "../schemas/userData.schema";
import checkCoordinatesValid from "../misc/checkCoordinatesValid";

const userDataDefaultConstant = (tg_id: number): userDataSchema => {
    const random = seedrandom(tg_id.toString())
    let coordinates = ['', '']
    while(!checkCoordinatesValid(coordinates[0], coordinates[1])){
        const a = []
        const b = []
        for(let i = 0; i < 4; i++){
            a.push(Math.round(random() * 16).toString(16))
            b.push(Math.round(random() * 16).toString(16))
        }
        coordinates[0] = a.join('')
        coordinates[1] = b.join('')
    }

    return {
        tg_id,
        coordinates: coordinates.join(':').toUpperCase(),
        items: {},
        transactions: [],
        shipTechnologies: [],
        balance: 500000,
        companyName: 'Лучшая компания в мире',
        colonies: [],
        bounty: 0
    }
}

export default userDataDefaultConstant