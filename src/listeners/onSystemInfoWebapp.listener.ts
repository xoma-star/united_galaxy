import checkCoordinatesValid from "../misc/checkCoordinatesValid";
import systemGenerator from "../generators/system.generator";
import TelegramBot from "node-telegram-bot-api";
import KEYBOARDS from "../keyboards";
import getUserData from "../pocketbase/getUserData";
import MESSAGES from "../messages";

const onSystemInfoWebappListener = async (bot: TelegramBot, coordinates: string, replyTo: number) => {
    const coordinatesParsed = coordinates.split(':')
    if(checkCoordinatesValid(coordinatesParsed[0], coordinatesParsed[1])){
        const system = systemGenerator(coordinates)
        const currentCoordinates = await getUserData(replyTo)
        await bot.sendMessage(replyTo,
            MESSAGES.RU.SYSTEM_INFO(system, coordinates, currentCoordinates.coordinates),
            {reply_markup: {inline_keyboard: KEYBOARDS.SYSTEM_TRAVEL_INLINE(coordinates)}}
        )
    }
    else{
        await bot.sendMessage(replyTo, MESSAGES.RU.INVALID_COORDINATES)
    }
}

export default onSystemInfoWebappListener