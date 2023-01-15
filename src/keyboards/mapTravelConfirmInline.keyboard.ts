import {InlineKeyboardButton} from "node-telegram-bot-api";
import callbackQueryCommandsEnum from "../enums/callbackQueryCommands.enum";

const mapTravelConfirmInlineKeyboard = (coordinates: string): InlineKeyboardButton[][] => {
    console.log(JSON.stringify({command: callbackQueryCommandsEnum.STARSHIP_MOVE_SYSTEM_CONFIRM, coordinates: coordinates}))
    return [
        [{text: 'Подтвердить', callback_data: JSON.stringify({command: callbackQueryCommandsEnum.STARSHIP_MOVE_SYSTEM_CONFIRM, coordinates: coordinates})}]
    ]
}

export default mapTravelConfirmInlineKeyboard