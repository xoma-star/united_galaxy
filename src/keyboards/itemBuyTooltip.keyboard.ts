import ResourceEnum from "../enums/resource.enum";
import {InlineKeyboardButton} from "node-telegram-bot-api";
import ResourcesConstant from "../constants/resources.constant";

const itemBuyTooltipKeyboard = (itemName: ResourceEnum): InlineKeyboardButton[][] => [
    [{text: `Купить ${ResourcesConstant[itemName].name}`, switch_inline_query_current_chat: `/buy ${ResourcesConstant[itemName].name} `}]
]

export default itemBuyTooltipKeyboard