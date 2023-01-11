import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";

const moveToSystemCallbackListener = async (bot: TelegramBot, message: CallbackQuery) => {
    await bot.sendMessage(message.from.id, 'Чтобы переместиться в другую звездную систему используйте команду /travel {координаты}.')
}

export default moveToSystemCallbackListener