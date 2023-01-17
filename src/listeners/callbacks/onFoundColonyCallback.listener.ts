import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import MESSAGES from "../../messages";
import getUserData from "../../pocketbase/getUserData";
import systemGenerator from "../../generators/system.generator";
import KEYBOARDS from "../../keyboards";

const onFoundColonyCallbackListener = async (bot: TelegramBot, query: CallbackQuery) => {
    try {
        const userData = await getUserData(query.from.id)
        const system = systemGenerator(userData.coordinates)
        if(system.planets.length < 1) return await bot.sendMessage(query.from.id, MESSAGES.RU.NO_COLONIZATION_PLANETS)
        await bot.sendMessage(query.from.id, MESSAGES.RU.FOUND_COLONY_SELECT_PLANET)
        for(let i = 0; i < system.planets.length; i++){
            await bot.sendMessage(query.from.id, MESSAGES.RU.COLONIZATION_PLANET_INFO(system.planets[i].name, i), {
                reply_markup: {inline_keyboard: KEYBOARDS.FOUND_COLONY_HERE(userData.coordinates, i)}
            })
        }
    }
    catch (e) {
        console.log(e)
    }
}

export default onFoundColonyCallbackListener