import {InlineKeyboardButton} from "node-telegram-bot-api";
import callbackQueryCommandsEnum from "../enums/callbackQueryCommands.enum";

const mapTravelKeyboard = (coordinates: string): InlineKeyboardButton[][] => [
    [{text: 'Перелет', callback_data: JSON.stringify({command: callbackQueryCommandsEnum.STARSHIP_MOVE_SYSTEM, coordinates})}]
]

export default mapTravelKeyboard