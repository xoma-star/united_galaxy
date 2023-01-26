import {InlineKeyboardButton} from "node-telegram-bot-api";

const extractResourceTooltipKeyboard = (id: string): InlineKeyboardButton[][] => [
    [{text: 'Изменить добываемый ресурс', switch_inline_query_current_chat: `/extract ${id} название`}]
]

export default extractResourceTooltipKeyboard