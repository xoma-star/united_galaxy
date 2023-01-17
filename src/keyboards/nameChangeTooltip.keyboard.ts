import {InlineKeyboardButton} from "node-telegram-bot-api";

const nameChangeTooltipKeyboard: InlineKeyboardButton[][] = [
    [{text: 'Ввести команду', switch_inline_query_current_chat: '/change_name '}]
]

export default nameChangeTooltipKeyboard