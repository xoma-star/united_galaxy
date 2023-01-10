import TelegramBot from "node-telegram-bot-api";
import StartMessageListener from "./startMessage.listener";

export default function addListeners(bot: TelegramBot){
    StartMessageListener(bot)
}