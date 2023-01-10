import TelegramBot from "node-telegram-bot-api";

const StartMessageListener = (bot: TelegramBot) => {
    bot.on('message', async (msg) => {
        if(msg.text === '/start'){
            await bot.sendMessage(msg.from?.id || -1, 'Сообщество Единой Галактики приветствует вас!')
            await bot.sendMessage(msg.from?.id || -1, 'Стремительно развивающейся экономике необходимы ресурсы. Группа инвесторов хочет заключить с вами контракт, чтобы вы умножили их капитал на этом спросе.')
            await bot.sendMessage(msg.from?.id || -1, 'От вас требуется создать компанию и привести ее к коммерческому успеху любыми доступными способами.')
            await bot.sendMessage(msg.from?.id || -1, 'Для этого они готовы выделить вам начальные ресурсы.')
            await bot.sendMessage(msg.from?.id || -1, 'Чтобы подписать контракт, нажмить на кнопку под этим сообщением.', {reply_markup: {
                    inline_keyboard: [[{text: 'Подписать', callback_data: JSON.stringify({command: 'aboab'})}]]
                }})
        }
    })
}

export default StartMessageListener