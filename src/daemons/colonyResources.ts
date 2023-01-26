import TelegramBot from "node-telegram-bot-api";
import pb from "../pocketbase";
import getUserData from "../pocketbase/getUserData";
import ColonySchema from "../schemas/colony.schema";
import ResourcesConstant from "../constants/resources.constant";
import calculateCargoLoad from "../misc/calculateCargoLoad";
import globalConstant from "../constants/global.constant";
import MESSAGES from "../messages";
import KEYBOARDS from "../keyboards";
import updateColonyData from "../pocketbase/updateColonyData";
import systemGenerator from "../generators/system.generator";

const colonyResourcesDaemon = (bot: TelegramBot) => {
    const daemon = async () => {
       try {
           const data: ColonySchema[] = await pb.collection('colonies').getFullList(200, {
               filter: `extractingResource != ''`
           })
           for(const colony of data) {
               await new Promise(r => setTimeout(r, 500))
               if(!colony.extractingResource) continue
               const system = systemGenerator(colony.coordinates.system)
               const totalStoring = calculateCargoLoad(colony.storage)
               const allowed = globalConstant.baseColonyStorage - totalStoring
               const gain = colony.extractingResource ?
                   (ResourcesConstant[colony.extractingResource].baseExtraction || 0) * system.resourcesMultiplier
                   : 0
               const willCount = Math.min(
                   Math.floor(allowed / globalConstant.storageCapacity[ResourcesConstant[colony.extractingResource].size]),
                   Math.ceil(gain * globalConstant.storageCapacity[ResourcesConstant[colony.extractingResource].size])
               )
               const userData = await getUserData(colony.owner)
               if(willCount === 0) {
                   await bot.sendMessage(
                       userData.tg_id,
                       MESSAGES.RU.STORE_IS_FULL_COLONY(colony.name),
                       {reply_markup: {inline_keyboard: KEYBOARDS.COLONY_MANAGE_INLINE(colony.id as string)}}
                   )
               }
               else{
                   (colony.storage as any)[colony.extractingResource] =
                       (colony.storage[colony.extractingResource] || 0) + willCount
                   if(system.planets[colony.coordinates.planetIndex].resources.indexOf(colony.extractingResource) < 0) colony.extractingResource = null
                   await updateColonyData(colony)
                   // await bot.sendMessage(userData.tg_id,
                   //     MESSAGES.RU.COLONY_RESOURCE_COLLECTED(colony.extractingResource, colony.name, willCount),
                   //     {disable_notification: true})
               }
           }
       }
       catch (e) {
           console.log(e)
       }
    }
    setInterval(daemon, 1000*60*60)
}

export default colonyResourcesDaemon