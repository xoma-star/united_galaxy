import CallbackQueryCommandsEnum from '../enums/callbackQueryCommands.enum'

interface moveToSystem{
    command: CallbackQueryCommandsEnum.STARSHIP_MOVE_SYSTEM,
    coordinates: string
}

type CallbackQueryDataSchema = moveToSystem

export default CallbackQueryDataSchema