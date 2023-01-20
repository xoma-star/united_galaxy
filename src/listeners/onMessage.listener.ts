import TelegramBot from "node-telegram-bot-api";
import StartMessageListener from "./commands/startMessage.listener";
import StarshipButtonListener from "./messages/starshipButton.listener";
import onFirstStepsCommandListener from "./commands/onFirstStepsCommand.listener";
import onFirstStepsGalaxyCommandListener from "./commands/onFirstStepsGalaxyCommand.listener";
import onSelfCompanyInfoListener from "./messages/onSelfCompanyInfo.listener";
import onTravelCommandEmptyMessageListener from "./commands/onTravelCommandEmptyMessage.listener";
import onSystemInfoListener from "./messages/onSystemInfo.listener";
import changeNameEmptyListener from "./messages/changeNameEmpty.listener";
import onSelfColoniesInfoListener from "./messages/onSelfColoniesInfo.listener";
import onStockMessageListener from "./messages/onStockMessage.listener";

const onMessageListener = (bot: TelegramBot) => {
    bot.on('message', (message) => {
        switch (message.text){
            case '/start': return StartMessageListener(bot, message.from?.id || -1)
            case 'Корабль': return StarshipButtonListener(bot, message)
            case '/first_steps': return onFirstStepsCommandListener(bot, message)
            case '/first_steps_galaxy': return onFirstStepsGalaxyCommandListener(bot, message)
            case 'Компания': return onSelfCompanyInfoListener(bot, message)
            case '/travel': return onTravelCommandEmptyMessageListener(bot, message)
            case 'Система': return onSystemInfoListener(bot, message)
            case '/change_name': return changeNameEmptyListener(bot, message)
            case 'Колонии': return onSelfColoniesInfoListener(bot, message)
            case 'Биржа': return onStockMessageListener(bot, message)
        }
    })
}

export default onMessageListener