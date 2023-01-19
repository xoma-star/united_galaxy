import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import CallbackQueryDataSchema from "../schemas/callbackQueryData.schema";
import moveToSystemCallbackListener from "./callbacks/moveToSystemCallback.listener";
import CallbackQueryCommandsEnum from '../enums/callbackQueryCommands.enum'
import onStarshipInventoryCallbackListener from "./callbacks/onStarshipInventoryCallback.listener";
import onPlanetScannerCallbackListener from "./callbacks/onPlanetScannerCallback.listener";
import onStarshipMoveConfirm from "./callbacks/onStarshipMoveConfirm";
import onStarshipAvailableTechnologiesListener from "./callbacks/onStarshipAvailableTechnologies.listener";
import onStarshipInstallTechnologyListener from "./callbacks/onStarshipInstallTechnology.listener";
import onChangeNameCallbackListener from "./callbacks/onChangeNameCallback.listener";
import onFoundColonyCallbackListener from "./callbacks/onFoundColonyCallback.listener";
import onFoundColonyHereCallbackListener from "./callbacks/onFoundColonyHereCallback.listener";
import onSelfColoniesListListener from "./callbacks/onSelfColoniesList.listener";
import onColonyManageCallbackListener from "./callbacks/onColonyManageCallback.listener";
import onManageBuildingsListener from "./callbacks/onManageBuildings.listener";
import onDeliverBuildingResourcesListener from "./callbacks/onDeliverBuildingResources.listener";

const onCallbackListener = (bot: TelegramBot) => {
    bot.on('callback_query', async (msg: CallbackQuery) => {
        const query: CallbackQueryDataSchema = JSON.parse(msg.data || '{}')
        if(!query.command) return
        await bot.editMessageReplyMarkup({inline_keyboard: []}, {message_id: msg.message?.message_id, chat_id: msg.from.id})
        switch (query.command) {
            case CallbackQueryCommandsEnum.STARSHIP_MOVE_SYSTEM: return moveToSystemCallbackListener(bot, msg, query.coordinates)
            case CallbackQueryCommandsEnum.STARSHIP_INVENTORY: return onStarshipInventoryCallbackListener(bot, msg)
            case CallbackQueryCommandsEnum.PLANET_SCANNER: return onPlanetScannerCallbackListener(bot, msg)
            case CallbackQueryCommandsEnum.STARSHIP_MOVE_SYSTEM_CONFIRM: return onStarshipMoveConfirm(bot, msg, query.coordinates)
            case CallbackQueryCommandsEnum.STARSHIP_INSTALL_TECHNOLOGIES: return onStarshipAvailableTechnologiesListener(bot, msg)
            case CallbackQueryCommandsEnum.STARSHIP_INSTALL_TECHNOLOGY_CONFIRM: return onStarshipInstallTechnologyListener(bot, msg, query.technology)
            case CallbackQueryCommandsEnum.CHANGE_COMPANY_NAME: return onChangeNameCallbackListener(bot, msg)
            case CallbackQueryCommandsEnum.FOUND_COLONY: return onFoundColonyCallbackListener(bot, msg)
            case CallbackQueryCommandsEnum.FOUND_COLONY_HERE: return onFoundColonyHereCallbackListener(bot, msg, query.coordinates, query.planetIndex)
            case CallbackQueryCommandsEnum.LIST_SELF_COLONIES: return onSelfColoniesListListener(bot, msg)
            case CallbackQueryCommandsEnum.MANAGE_COLONY: return onColonyManageCallbackListener(bot, msg, query.id)
            case CallbackQueryCommandsEnum.MANAGE_COLONY_MODULES: return onManageBuildingsListener(bot, msg, query.id)
            case CallbackQueryCommandsEnum.DELIVER_CONSTRUCTION_RESOURCES: return onDeliverBuildingResourcesListener(bot, msg, query.c, query.m)
        }
    })
}

export default onCallbackListener