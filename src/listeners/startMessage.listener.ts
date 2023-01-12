import TelegramBot from "node-telegram-bot-api";
import KEYBOARDS from "../keyboards";

const StartMessageListener = async (bot: TelegramBot, from: number) => {
    await bot.sendMessage(from, 'Сообщество Единой Галактики приветствует вас!')
    await bot.sendMessage(from, 'Стремительно развивающейся экономике необходимы ресурсы. Группа инвесторов хочет заключить с вами контракт, чтобы вы умножили их капитал на этом спросе.')
    await bot.sendMessage(from, 'От вас требуется создать компанию и привести ее к коммерческому успеху любыми доступными способами.')
    await bot.sendMessage(from, 'Для этого они готовы выделить вам начальные ресурсы.')
    await bot.sendMessage(from, 'Чтобы подписать контракт, нажмить на кнопку под этим сообщением.', {reply_markup: {
            inline_keyboard: [[{text: 'Подписать', callback_data: JSON.stringify({command: 'aboab'})}]],
            keyboard: KEYBOARDS.DEFAULT,
            resize_keyboard: true
        }})
}

export default StartMessageListener