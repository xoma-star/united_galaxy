import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import ResourceEnum from "../../enums/resource.enum";
import getUserData from "../../pocketbase/getUserData";
import MESSAGES from "../../messages";
import updateUserData from "../../pocketbase/updateUserData";

const onStarshipInstallTechnologyListener = async (bot: TelegramBot, query: CallbackQuery, tech: ResourceEnum) => {
    try {
        const userData = await getUserData(query.from.id)
        const countLeft = (userData.items[tech] || 0) - 1
        if(userData.shipTechnologies.indexOf(tech) > -1) return await bot.sendMessage(query.from.id, MESSAGES.RU.MODULE_ALREADY_INSTALLED)
        if(countLeft < 0) return await bot.sendMessage(query.from.id, MESSAGES.RU.NO_MODULES_AVAILABLE)
        const newData = {...userData};
        (newData.items as any)[tech] = countLeft
        newData.shipTechnologies.push(tech)
        await updateUserData(newData)
        await bot.sendMessage(query.from.id, MESSAGES.RU.MODULE_SUCCESSFULLY_INSTALLED(tech))
    }
    catch (e){
        console.log(e)
    }
}

export default onStarshipInstallTechnologyListener