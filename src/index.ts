import TelegramBot from "node-telegram-bot-api";
import KEYBOARDS from "./keyboards";
import addListeners from "./listeners";
import systemGenerator from "./generators/system.generator";

const token = '5828331861:AAHs0VGlM4BJhJbWF9lVQxEeL8j187m_QcQ'

const bot = new TelegramBot(token, {polling: true})

bot.setMyCommands([{command: '/start', description: 'Приветственное сообщение'}])

addListeners(bot)

bot.on('message', (msg) => {
    console.log(systemGenerator('seedt'))
    if(msg.text === 'Биржа'){
        bot.sendMessage(msg.from?.id || -1, 'Единая Галактическая Биржа', {
            reply_markup: {
                inline_keyboard: KEYBOARDS.STOCKS
            }
        })
    }
})