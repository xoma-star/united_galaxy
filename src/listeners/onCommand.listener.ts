import TelegramBot, {Message} from "node-telegram-bot-api";
import moveToSystemCommandListener from "./commands/moveToSystemCommand.listener";
import onChangeNameListener from "./commands/onChangeName.listener";

const onCommandListener = (bot: TelegramBot) => {
    bot.onText(/\/travel (.+)/, (msg: Message, match: RegExpExecArray | null) => moveToSystemCommandListener(bot, msg, match))
    bot.onText(/\/change_name (.+)/, (msg: Message, match: RegExpExecArray | null) => onChangeNameListener(bot, msg, match))
}

export default onCommandListener