import CallbackQueryCommandsEnum from '../enums/callbackQueryCommands.enum'

interface moveToSystem{
    command: CallbackQueryCommandsEnum.STARSHIP_MOVE_SYSTEM | CallbackQueryCommandsEnum.PLANET_SCANNER | CallbackQueryCommandsEnum.STARSHIP_MOVE_SYSTEM_CONFIRM,
    coordinates: string
}

interface starshipInventory{
    command: CallbackQueryCommandsEnum.STARSHIP_INVENTORY
}

type CallbackQueryDataSchema = moveToSystem | starshipInventory

export default CallbackQueryDataSchema