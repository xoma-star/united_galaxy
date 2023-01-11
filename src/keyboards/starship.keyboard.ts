import {InlineKeyboardButton} from "node-telegram-bot-api";

const StarshipKeyboard: InlineKeyboardButton[][] = [
    [{text: 'Перелет в другую систему', switch_inline_query_current_chat: '/travel '}]
]

export default StarshipKeyboard