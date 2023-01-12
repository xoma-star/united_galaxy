import TelegramBot from "node-telegram-bot-api";
import addListeners from "./listeners";
import startExpress from "./api";

const token = '5828331861:AAHs0VGlM4BJhJbWF9lVQxEeL8j187m_QcQ'

// const bot = new TelegramBot(token, {polling: true})
//
// bot.setMyCommands([
//     {command: '/start', description: 'Приветственное сообщение'},
//     {command: '/travel', description: 'Перелет в другую систему'}
// ])
//
// addListeners(bot)
startExpress()