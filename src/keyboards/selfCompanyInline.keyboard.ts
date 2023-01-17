import {InlineKeyboardButton} from "node-telegram-bot-api";
import CallbackQueryCommandsEnum from "../enums/callbackQueryCommands.enum";

const selfCompanyInlineKeyboard: InlineKeyboardButton[][] = [
    [{text: 'Изменить название', callback_data: JSON.stringify({command: CallbackQueryCommandsEnum.CHANGE_COMPANY_NAME})}]
]

export default selfCompanyInlineKeyboard