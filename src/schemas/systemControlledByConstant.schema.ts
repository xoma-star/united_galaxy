import systemControlledByEnum from "../enums/systemControlledBy.enum";

type SystemControlledByConstantSchema = {
    [K in keyof typeof systemControlledByEnum]: {
        name: string
    }
}

export default SystemControlledByConstantSchema