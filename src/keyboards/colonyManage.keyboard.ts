import {InlineKeyboardButton} from "node-telegram-bot-api";
import CallbackQueryCommandsEnum from "../enums/callbackQueryCommands.enum";

const colonyManageKeyboard = (id: string): InlineKeyboardButton[][] => [
    [{text: 'Управление постройками', callback_data: JSON.stringify({command: CallbackQueryCommandsEnum.MANAGE_COLONY_MODULES, id})}],
    [{text: 'Собрать все ресурсы', callback_data: JSON.stringify({command: CallbackQueryCommandsEnum.COLONY_COLLECT_ALL, id})}],
    [{text: 'Изменить добываемый ресурс', switch_inline_query_current_chat: `/extract ${id} название`}]
]

export default colonyManageKeyboard