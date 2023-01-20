import {InlineKeyboardButton} from "node-telegram-bot-api";

const stocksInlineTooltipKeyboard: InlineKeyboardButton[][] = [
    [{text: 'Купить', switch_inline_query_current_chat: '/buy '}],
    [{text: 'Продать', switch_inline_query_current_chat: '/sell '}],
    [{text: 'Листинг', switch_inline_query_current_chat: '/list '}]
]

export default stocksInlineTooltipKeyboard