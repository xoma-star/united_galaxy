import TelegramBot from "node-telegram-bot-api";
import addListeners from "./listeners";
import startExpress from "./api";

const token = '5828331861:AAHs0VGlM4BJhJbWF9lVQxEeL8j187m_QcQ'

const bot = new TelegramBot(token, {polling: true})

bot.setMyCommands([
    {command: '/start', description: 'Приветственное сообщение'},
    {command: '/first_steps', description: 'Первые шаги'},
    {command: '/first_steps_galaxy', description: 'Первые шаги: устройство галактики'},
    {command: '/travel', description: 'Перелет'},
    {command: '/change_name', description: 'Переименовать компанию'},
    {command: '/list', description: 'Список лотов'},
    {command: '/sell', description: 'Продать предмет'},
    {command: '/buy', description: 'Купить предмет'}
])

addListeners(bot)
startExpress()

//TODO:
// сделать систему репутации
// диверсии для повстанцев
// поимка пиратов и игроков с наградой
// грабежи для пиратов
// модуль телепорта позволяет автоматически покупать и продавать ресурсы