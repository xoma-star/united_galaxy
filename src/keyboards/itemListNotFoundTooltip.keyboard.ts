import ResourceEnum from "../enums/resource.enum";
import {InlineKeyboardButton} from "node-telegram-bot-api";
import ResourcesConstant from "../constants/resources.constant";

const itemListNotFoundTooltipKeyboard = (itemName: ResourceEnum): InlineKeyboardButton[][] => [
    [{text: `Листинг ${ResourcesConstant[itemName].name}`, switch_inline_query_current_chat: `/list ${ResourcesConstant[itemName].name}`}]
]

export default itemListNotFoundTooltipKeyboard