import {InlineKeyboardButton} from "node-telegram-bot-api";
import CallbackQueryCommandsEnum from "../enums/callbackQueryCommands.enum";

const stocksInlineTooltipKeyboard: InlineKeyboardButton[][] = [
    [{text: 'Купить', switch_inline_query_current_chat: '/buy '}],
    [{text: 'Продать', switch_inline_query_current_chat: '/sell '}],
    [{text: 'Листинг', switch_inline_query_current_chat: '/list '}],
    [{text: 'Мои лоты', callback_data: JSON.stringify({command: CallbackQueryCommandsEnum.ACTIVE_LOTS})}]
]

export default stocksInlineTooltipKeyboard