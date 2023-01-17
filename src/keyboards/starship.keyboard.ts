import {InlineKeyboardButton} from "node-telegram-bot-api";
import CallbackQueryCommandsEnum from "../enums/callbackQueryCommands.enum";

const StarshipKeyboard: InlineKeyboardButton[][] = [
    [{text: 'Перелет в другую систему', switch_inline_query_current_chat: '/travel '}],
    [{text: 'Грузовой модуль',  callback_data: JSON.stringify({command: CallbackQueryCommandsEnum.STARSHIP_INVENTORY})}],
    [{text: 'Установить технологии', callback_data: JSON.stringify({command: CallbackQueryCommandsEnum.STARSHIP_INSTALL_TECHNOLOGIES})}]
]

export default StarshipKeyboard