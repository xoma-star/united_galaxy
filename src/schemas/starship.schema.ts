import ResourceEnum from "../enums/resource.enum";

interface StarshipSchema {
    id: string,
    owner: string,
    storage: {
        [K in keyof typeof ResourceEnum]: number
    },
    technologies: ResourceEnum[]
}