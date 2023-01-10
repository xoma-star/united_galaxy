import {InlineKeyboardButton} from "node-telegram-bot-api";

const StocksKeyboard: InlineKeyboardButton[][] = [
    [{text: 'Посмотреть лоты', callback_data: '123'}],
    [{text: 'Продать', callback_data: '123'}]
]

export default StocksKeyboard