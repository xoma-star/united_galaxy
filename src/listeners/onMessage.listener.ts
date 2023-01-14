import TelegramBot from "node-telegram-bot-api";
import StartMessageListener from "./startMessage.listener";
import StarshipButtonListener from "./starshipButton.listener";
import onFirstStepsCommandListener from "./onFirstStepsCommand.listener";
import onFirstStepsGalaxyCommandListener from "./onFirstStepsGalaxyCommand.listener";
import onSelfCompanyInfoListener from "./onSelfCompanyInfo.listener";

const onMessageListener = (bot: TelegramBot) => {
    bot.on('message', (message) => {
        switch (message.text){
            case '/start': return StartMessageListener(bot, message.from?.id || -1)
            case 'Корабль': return StarshipButtonListener(bot, message)
            case '/first_steps': return onFirstStepsCommandListener(bot, message)
            case '/first_steps_galaxy': return onFirstStepsGalaxyCommandListener(bot, message)
            case 'Компания': return onSelfCompanyInfoListener(bot, message)
        }
    })
}

export default onMessageListener