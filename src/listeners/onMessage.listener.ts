import TelegramBot from "node-telegram-bot-api";
import StartMessageListener from "./startMessage.listener";
import StarshipButtonListener from "./starshipButton.listener";

const onMessageListener = (bot: TelegramBot) => {
    bot.on('message', (message) => {
        switch (message.text){
            case '/start': return StartMessageListener(bot, message.from?.id || -1)
            case 'Корабль': return StarshipButtonListener(bot, message)
        }
    })
}

export default onMessageListener