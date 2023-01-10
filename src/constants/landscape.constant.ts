import LandscapeSchema from "../schemas/landscape.schema";

const LandscapeConstant: LandscapeSchema = {
    PANGEAN: {
        difficultyMultiplier: 1,
        name: 'пангейский',
        description: 'один огромный континент'
    },
    ARCHIPELAGO: {
        difficultyMultiplier: 1,
        name: 'архипелаг',
        description: 'поверхность покрыта водой. могут встречаться группы островов'
    },
    CONTINENTAL: {
        difficultyMultiplier: 1,
        name: 'континентальный',
        description: 'огромные части суши, разделенные океанами и морями'
    },
    ISLANDS: {
        difficultyMultiplier: 1,
        name: 'островной',
        description: 'средние участки суши разделены водой'
    },
    LAKY: {
        difficultyMultiplier: 1,
        name: 'озерный',
        description: 'множество озер'
    },
    OCEANIC: {
        difficultyMultiplier: 1,
        name: 'океаны',
        description: 'огромные участки воды'
    },
    REEF: {
        difficultyMultiplier: 1,
        name: 'рифовый',
        description: 'возможны участки суши'
    }
}