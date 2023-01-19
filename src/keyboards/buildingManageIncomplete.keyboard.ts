import {InlineKeyboardButton} from "node-telegram-bot-api";
import CallbackQueryCommandsEnum from "../enums/callbackQueryCommands.enum";

const buildingManageIncompleteKeyboard = (colonyId: string, moduleId: string): InlineKeyboardButton[][] => {
    console.log(colonyId, moduleId)
    return [
        [{text: 'Доставить ресурсы', callback_data: JSON.stringify({command: CallbackQueryCommandsEnum.DELIVER_CONSTRUCTION_RESOURCES, c: colonyId, m: moduleId})}]
    ]
}

export default buildingManageIncompleteKeyboard