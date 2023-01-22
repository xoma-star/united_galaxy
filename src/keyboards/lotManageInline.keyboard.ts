import {InlineKeyboardButton} from "node-telegram-bot-api";
import CallbackQueryCommandsEnum from "../enums/callbackQueryCommands.enum";

const lotManageInlineKeyboard = (id: string): InlineKeyboardButton[][] => [
    [{text: 'Снять лот', callback_data: JSON.stringify({command: CallbackQueryCommandsEnum.REMOVE_LOT, id})}]
]

export default lotManageInlineKeyboard