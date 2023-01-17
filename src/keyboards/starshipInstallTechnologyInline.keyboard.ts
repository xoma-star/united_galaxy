import {InlineKeyboardButton} from "node-telegram-bot-api";
import CallbackQueryCommandsEnum from "../enums/callbackQueryCommands.enum";
import ResourceEnum from "../enums/resource.enum";

const starshipInstallTechnologyInlineKeyboard = (technology: ResourceEnum): InlineKeyboardButton[][] => [
    [{text: 'Установить', callback_data: JSON.stringify({command: CallbackQueryCommandsEnum.STARSHIP_INSTALL_TECHNOLOGY_CONFIRM, technology})}]
]

export default starshipInstallTechnologyInlineKeyboard