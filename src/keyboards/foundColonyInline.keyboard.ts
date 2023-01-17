import {InlineKeyboardButton} from "node-telegram-bot-api";
import CallbackQueryCommandsEnum from "../enums/callbackQueryCommands.enum";

const foundColonyInlineKeyboard = (coordinates: string, planetIndex: number): InlineKeyboardButton[][] => [
    [{text: 'Основать здесь', callback_data: JSON.stringify({command: CallbackQueryCommandsEnum.FOUND_COLONY_HERE, coordinates, planetIndex})}]
]

export default foundColonyInlineKeyboard