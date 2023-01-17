import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import getUserData from "../../pocketbase/getUserData";
import calculateDistance from "../../misc/calculateDistance";
import systemGenerator from "../../generators/system.generator";
import MESSAGES from "../../messages";
import KEYBOARDS from "../../keyboards";

const moveToSystemCallbackListener = async (bot: TelegramBot, message: CallbackQuery, coordinates: string) => {
    try {
        const currentCoordinates = await getUserData(message.from.id)
        const distance = calculateDistance(currentCoordinates.coordinates, coordinates)
        const system = systemGenerator(coordinates)
        await bot.sendMessage(
            message.from.id,
            MESSAGES.RU.SYSTEM_TRAVEL_INFO(system.type, coordinates, distance),
            {reply_markup: {
                inline_keyboard: KEYBOARDS.SYSTEM_TRAVEL_CONFIRM_INLINE(coordinates)
            }}
        )
    } catch (e) {
        console.log(e)
    }
}

export default moveToSystemCallbackListener