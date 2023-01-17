import CallbackQueryCommandsEnum from '../enums/callbackQueryCommands.enum'
import ResourceEnum from "../enums/resource.enum";

interface moveToSystem{
    command: CallbackQueryCommandsEnum.STARSHIP_MOVE_SYSTEM | CallbackQueryCommandsEnum.PLANET_SCANNER | CallbackQueryCommandsEnum.STARSHIP_MOVE_SYSTEM_CONFIRM,
    coordinates: string
}

interface starshipInventory{
    command: CallbackQueryCommandsEnum.STARSHIP_INVENTORY |
        CallbackQueryCommandsEnum.STARSHIP_INSTALL_TECHNOLOGIES |
        CallbackQueryCommandsEnum.CHANGE_COMPANY_NAME |
        CallbackQueryCommandsEnum.FOUND_COLONY |
        CallbackQueryCommandsEnum.LIST_SELF_COLONIES
}

interface foundColonyHere{
    command: CallbackQueryCommandsEnum.FOUND_COLONY_HERE,
    coordinates: string,
    planetIndex: number
}

interface starshipTechnology {
    command: CallbackQueryCommandsEnum.STARSHIP_INSTALL_TECHNOLOGY_CONFIRM,
    technology: ResourceEnum
}

type CallbackQueryDataSchema = moveToSystem | starshipInventory | starshipTechnology | foundColonyHere

export default CallbackQueryDataSchema