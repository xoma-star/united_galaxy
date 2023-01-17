import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import getUserData from "../../pocketbase/getUserData";
import ResourceEnum from "../../enums/resource.enum";
import ResourcesConstant from "../../constants/resources.constant";
import MESSAGES from "../../messages";
import capitalize from "../../misc/capitalize";
import KEYBOARDS from "../../keyboards";

const onStarshipAvailableTechnologiesListener = async (bot: TelegramBot, query: CallbackQuery) => {
    try{
        const userData = await getUserData(query.from.id)
        const modulesAvailable = (Object.keys(userData.items) as ResourceEnum[])
            .map(x => ({consumable: ResourcesConstant[x].starShipConsumable, item: x}))
            .filter(x => x.consumable)
        if(modulesAvailable.length === 0) return await bot.sendMessage(query.from.id, MESSAGES.RU.NO_MODULES_AVAILABLE)
        await bot.sendMessage(query.from.id, MESSAGES.RU.MODULES_AVAILABLE)
        for (const x of modulesAvailable) {
            await bot.sendMessage(query.from.id, capitalize(ResourcesConstant[x.item].name), {
                reply_markup: {
                    inline_keyboard: KEYBOARDS.STARSHIP_INSTALL_TECH_INLINE(x.item)
                }
            })
        }
    }
    catch (e) {
        console.log(e)
    }
}

export default onStarshipAvailableTechnologiesListener