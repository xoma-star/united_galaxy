import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import CallbackQueryDataSchema from "../schemas/callbackQueryData.schema";
import moveToSystemCallbackListener from "./moveToSystemCallback.listener";
import CallbackQueryCommandsEnum from '../enums/callbackQueryCommands.enum'
import onStarshipInventoryCallbackListener from "./onStarshipInventoryCallback.listener";
import onPlanetScannerCallbackListener from "./onPlanetScannerCallback.listener";
import onStarshipMoveConfirm from "./onStarshipMoveConfirm";

const onCallbackListener = (bot: TelegramBot) => {
    bot.on('callback_query', (msg: CallbackQuery) => {
        const query: CallbackQueryDataSchema = JSON.parse(msg.data || '{}')
        if(!query.command) return
        switch (query.command) {
            case CallbackQueryCommandsEnum.STARSHIP_MOVE_SYSTEM: return moveToSystemCallbackListener(bot, msg, query.coordinates)
            case CallbackQueryCommandsEnum.STARSHIP_INVENTORY: return onStarshipInventoryCallbackListener(bot, msg)
            case CallbackQueryCommandsEnum.PLANET_SCANNER: return onPlanetScannerCallbackListener(bot, msg)
            case CallbackQueryCommandsEnum.STARSHIP_MOVE_SYSTEM_CONFIRM: return onStarshipMoveConfirm(bot, msg, query.coordinates)
        }
    })
}

export default onCallbackListener