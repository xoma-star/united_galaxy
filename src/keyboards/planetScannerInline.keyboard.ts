import {InlineKeyboardButton} from "node-telegram-bot-api";
import callbackQueryCommandsEnum from "../enums/callbackQueryCommands.enum";

const planetScannerInlineKeyboard = (coordinates: string): InlineKeyboardButton[][] => {
    return [
        [{text: 'Планетарный сканер', callback_data: JSON.stringify({command: callbackQueryCommandsEnum.PLANET_SCANNER, coordinates: coordinates})}]
    ]
}

export default planetScannerInlineKeyboard