import ResourceEnum from "../enums/resource.enum";
import {InlineKeyboardButton} from "node-telegram-bot-api";
import ResourcesConstant from "../constants/resources.constant";

const itemSellTooltipKeyboard = (itemName: ResourceEnum): InlineKeyboardButton[][] => [
    [{text: `Продать ${ResourcesConstant[itemName].name}`, switch_inline_query_current_chat: `/sell ${ResourcesConstant[itemName].name} `}]
]

export default itemSellTooltipKeyboard