import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import getUserData from "../pocketbase/getUserData";
import calculateDistance from "../misc/calculateDistance";
import systemGenerator from "../generators/system.generator";
import MESSAGES from "../messages";

const moveToSystemCallbackListener = async (bot: TelegramBot, message: CallbackQuery, coordinates: string) => {
    await bot.editMessageReplyMarkup({inline_keyboard: []}, {message_id: message.message?.message_id, chat_id: message.from.id})
    const currentCoordinates = await getUserData(message.from.id)
    const distance = calculateDistance(currentCoordinates.coordinates, coordinates)
    const system = systemGenerator(coordinates)
    await bot.sendMessage(message.from.id, MESSAGES.RU.SYSTEM_TRAVEL_INFO(system.type, coordinates, distance))
}

export default moveToSystemCallbackListener