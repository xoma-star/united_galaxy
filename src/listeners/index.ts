import TelegramBot from "node-telegram-bot-api";
import onMessageListener from "./onMessage.listener";
import onCallbackListener from "./onCallback.listener";
import onCommandListener from "./onCommand.listener";
import onWebappData from "./onWebappData";

export default function addListeners(bot: TelegramBot){
    onMessageListener(bot)
    onCallbackListener(bot)
    onCommandListener(bot)
    onWebappData(bot)
}