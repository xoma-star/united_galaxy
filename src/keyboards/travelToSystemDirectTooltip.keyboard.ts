import {InlineKeyboardButton} from "node-telegram-bot-api";

const travelToSystemDirectTooltipKeyboard = (coordinates: string): InlineKeyboardButton[][] => [
    [{text: 'Переместиться к колонии', switch_inline_query_current_chat: `/travel ${coordinates}`}],
]

export default travelToSystemDirectTooltipKeyboard