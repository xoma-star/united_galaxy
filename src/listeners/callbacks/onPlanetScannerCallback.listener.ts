import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import MESSAGES from "../../messages";
import systemGenerator from "../../generators/system.generator";
import systemSchema from "../../schemas/system.schema";
import getUserData from "../../pocketbase/getUserData";
import ResourceEnum from "../../enums/resource.enum";
import KEYBOARDS from "../../keyboards";

const onPlanetScannerCallbackListener = async (bot: TelegramBot, query: CallbackQuery) => {
    try {
        const queryData = JSON.parse(query.data as string)
        const system: systemSchema = systemGenerator(queryData.coordinates)
        const userData = await getUserData(query.from.id)
        if(userData.shipTechnologies.indexOf(ResourceEnum.PLANET_SCANNER) < 0) return await bot
            .sendMessage(query.from.id,
                MESSAGES.RU.PLANET_SCANNER_REQUIRED,
                {reply_markup: {inline_keyboard: [KEYBOARDS.STARSHIP[2]]}}
            )
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
    catch (e) {
        console.log(e)
    }
}

export default onPlanetScannerCallbackListener