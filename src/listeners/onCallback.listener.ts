import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import CallbackQueryDataSchema from "../schemas/callbackQueryData.schema";
import moveToSystemCallbackListener from "./moveToSystemCallback.listener";
import CallbackQueryCommandsEnum from '../enums/callbackQueryCommands.enum'

const onCallbackListener = (bot: TelegramBot) => {
    bot.on('callback_query', (msg: CallbackQuery) => {
        const query: CallbackQueryDataSchema = JSON.parse(msg.data || '{}')
        if(!query.command) return
        switch (query.command) {
            case CallbackQueryCommandsEnum.STARSHIP_MOVE_SYSTEM: return moveToSystemCallbackListener(bot, msg)
        }
    })
}

export default onCallbackListener