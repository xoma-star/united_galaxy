import TelegramBot from "node-telegram-bot-api";
import colonyResourcesDaemon from "./colonyResources";

const addDaemons = (bot: TelegramBot) => {
    colonyResourcesDaemon(bot)
}

export default addDaemons