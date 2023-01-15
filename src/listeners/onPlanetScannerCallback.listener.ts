import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import MESSAGES from "../messages";
import systemGenerator from "../generators/system.generator";
import systemSchema from "../schemas/system.schema";

const onPlanetScannerCallbackListener = async (bot: TelegramBot, query: CallbackQuery) => {
    const queryData = JSON.parse(query.data as string)
    const system: systemSchema = systemGenerator(queryData.coordinates)
    await bot.sendMessage(
        query.from.id,
        MESSAGES.RU.PLANET_SCANNER(system.planets)
    )
    setTimeout(() => {
        system.planets.forEach(async (v, i) => {
            await bot.sendMessage(
                query.from.id,
                MESSAGES.RU.PLANET_INFO(v, i)
            )
        })
    }, 1500)
}

export default onPlanetScannerCallbackListener