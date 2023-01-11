import express from 'express'
import checkCoordinatesValid from "../misc/checkCoordinatesValid";
import weighted_random from "../misc/weighted_random";
import systemEnum from "../enums/system.enum";
import SystemGeneratorConstant from "../constants/systemGenerator.constant";
import cors from 'cors'

const startExpress = () => {
    const app = express()
    const port = 3000

    app.use(cors({origin: 'https://united-galaxy.vercel.app'}))

    app.get('/getSectorValidSystems', (req, res) => {
        const coordinates = (req.query.sector as string).split(':')
        if(!checkCoordinatesValid(coordinates[0], coordinates[1])) return res.status(404).send('invalid sector')
        const arr: string[][] = []
        for(let i = 0; i < 16; i++){
            const a: string[] = []
            for(let j = 0; j < 16; j++){
                const x = `${coordinates[0]}${j.toString(16)}`
                const y = `${coordinates[1]}${i.toString(16)}`
                if(checkCoordinatesValid(x, y)){
                    a.push(weighted_random<systemEnum>(
                        (Object.keys(SystemGeneratorConstant) as (keyof typeof SystemGeneratorConstant)[])
                            .reduce((a, v) => ({
                                ...a,
                                [v]: SystemGeneratorConstant[v].chance
                            }), {}),
                        `${x}:${y}`
                    ))
                }
                else{
                    a.push('HIDE')
                }
            }
            arr.push(a)
        }
        return res.status(200).send(arr)
    })

    app.listen(port, () => 'server started')
}

export default startExpress