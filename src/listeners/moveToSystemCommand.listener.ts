import TelegramBot, {Message} from "node-telegram-bot-api";
import mapTooltipKeyboard from "../keyboards/mapTooltip.keyboard";

const moveToSystemCommandListener = async (bot: TelegramBot, msg: Message, match: RegExpExecArray | null) => {
    if(!match) return await bot.sendMessage(msg.from?.id || -1, 'Неизвестная ошибка')
    const coordinates = match[1].split('-')
    if(
        coordinates.length < 2
    ) return await bot
        .sendMessage(msg.from?.id || -1,
            'Некорректные координаты. Вы можете воспользоваться картой и скопировать их оттуда.',
            {reply_markup: {inline_keyboard: mapTooltipKeyboard}}
        )


    bot.sendMessage(msg.from?.id || -1, 'nice')
}

export default moveToSystemCommandListener