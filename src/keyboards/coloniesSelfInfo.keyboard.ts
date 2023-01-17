import {InlineKeyboardButton} from "node-telegram-bot-api";
import CallbackQueryCommandsEnum from "../enums/callbackQueryCommands.enum";

const coloniesSelfInfoKeyboard: InlineKeyboardButton[][] = [
    [{text: 'Мои колонии', callback_data: JSON.stringify({command: CallbackQueryCommandsEnum.LIST_SELF_COLONIES})}],
    [{text: 'Основать колонию', callback_data: JSON.stringify({command: CallbackQueryCommandsEnum.FOUND_COLONY})}]
]

export default coloniesSelfInfoKeyboard