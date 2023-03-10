import TelegramBot, {Message} from "node-telegram-bot-api";
import moveToSystemCommandListener from "./commands/moveToSystemCommand.listener";
import onChangeNameListener from "./commands/onChangeName.listener";
import onItemListListener from "./commands/onItemList.listener";
import onSellListener from "./commands/onSell.listener";
import onBuyListener from "./commands/onBuy.listener";
import onItemInfoListener from "./commands/onItemInfo.listener";
import onItemCraftListener from "./commands/onItemCraft.listener";
import onExtractResourceListener from "./commands/onExtractResource.listener";

const onCommandListener = (bot: TelegramBot) => {
    bot.onText(/\/travel (.+)/, (msg: Message, match: RegExpExecArray | null) => moveToSystemCommandListener(bot, msg, match))
    bot.onText(/\/change_name (.+)/, (msg: Message, match: RegExpExecArray | null) => onChangeNameListener(bot, msg, match))
    bot.onText(/\/list (.+)/, (msg, match) => onItemListListener(bot, msg, match))
    bot.onText(/\/sell (.+)/, (msg, match) => onSellListener(bot, msg, match))
    bot.onText(/\/buy (.+)/, (msg, match) => onBuyListener(bot, msg, match))
    bot.onText(/\/info (.+)/, (msg, match) => onItemInfoListener(bot, msg, match))
    bot.onText(/\/craft (.+)/, (msg, match) => onItemCraftListener(bot, msg, match))
    bot.onText(/\/extract (.+)/, (msg, match) => onExtractResourceListener(bot, msg, match))
}

export default onCommandListener