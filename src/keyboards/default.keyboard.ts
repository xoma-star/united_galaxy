import {KeyboardButton} from "node-telegram-bot-api";

const DefaultKeyboard = (coordinates?: string): KeyboardButton[][] => [
    [{text: 'Биржа'}, {text: 'Корабль'}, {text: 'Система'}],
    [{text: 'Колонии'}, {text: 'Компания'}],
    [{text: 'Карта', web_app: {url: `https://united-galaxy.vercel.app` + (coordinates ? `/?sector=${coordinates?.split(':').map(x => x.slice(0, 3)).join(':')}` : '')}}]
]

export default DefaultKeyboard