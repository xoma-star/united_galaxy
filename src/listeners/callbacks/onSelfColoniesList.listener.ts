import TelegramBot, {CallbackQuery} from "node-telegram-bot-api";
import MESSAGES from "../../messages";
import getUserData from "../../pocketbase/getUserData";
import KEYBOARDS from "../../keyboards";

const onSelfColoniesListListener = async (bot: TelegramBot, query: CallbackQuery) => {
    try {
        const userData = await getUserData(query.from.id, true)
        const colonies = userData.expand?.colonies
        if(typeof colonies === 'undefined' || colonies.length < 1) return bot
            .sendMessage(query.from.id, MESSAGES.RU.NO_COLONIES_MANAGED)
        await bot.sendMessage(query.from.id, MESSAGES.RU.LIST_SELF_COLONIES)
        for(const colony of colonies) await bot
            .sendMessage(
                query.from.id,
                MESSAGES.RU.LIST_SELF_COLONIES_EXACT(colony, userData.coordinates === colony.coordinates.system),
                {reply_markup: {
                    inline_keyboard: userData.coordinates === colony.coordinates.system ?
                        KEYBOARDS.COLONY_INFO_INLINE(colony.id as string) :
                        KEYBOARDS.TRAVEL_TO_SYSTEM_TOOLTIP(colony.coordinates.system)
                }}
            )

    }
    catch (e) {
        console.log(e)
    }
}

export default onSelfColoniesListListener