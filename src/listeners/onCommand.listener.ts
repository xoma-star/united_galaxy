import TelegramBot, {Message} from "node-telegram-bot-api";
import moveToSystemCommandListener from "./moveToSystemCommand.listener";

const onCommandListener = (bot: TelegramBot) => {
    bot.onText(/\/travel (.+)/, (msg: Message, match: RegExpExecArray | null) => moveToSystemCommandListener(bot, msg, match))
}

export default onCommandListener