import {KeyboardButton} from "node-telegram-bot-api";

const DefaultKeyboard: KeyboardButton[][] = [
    [{text: 'Биржа'}, {text: 'Корабль'}],
    [{text: 'Колонии'}, {text: 'Компания'}],
    [{text: 'Карта', web_app: {url: 'https://united-galaxy.vercel.app'}}]
]

export default DefaultKeyboard