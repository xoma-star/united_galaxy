import {InlineKeyboardButton} from "node-telegram-bot-api";
import CallbackQueryCommandsEnum from "../enums/callbackQueryCommands.enum";

const colonyInfoInlineKeyboard = (colonyId: string): InlineKeyboardButton[][] => [
    [{text: 'Управлять колонией', callback_data: JSON.stringify({command: CallbackQueryCommandsEnum.MANAGE_COLONY, id: colonyId})}]
]

export default colonyInfoInlineKeyboard