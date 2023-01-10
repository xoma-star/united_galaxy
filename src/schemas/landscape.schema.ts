import LandscapeEnum from "../enums/landscape.enum";

type LandscapeSchema = {
    [K in keyof typeof LandscapeEnum]: {
        difficultyMultiplier: number,
        name: string,
        description: string
    }
}

export default LandscapeSchema