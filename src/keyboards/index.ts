import DefaultKeyboard from "./default.keyboard";
import StocksKeyboard from "./stocks.keyboard";
import StarshipKeyboard from "./starship.keyboard";
import mapTravelKeyboard from "./mapTravel.keyboard";
import planetScannerInlineKeyboard from "./planetScannerInline.keyboard";
import mapTravelConfirmInlineKeyboard from "./mapTravelConfirmInline.keyboard";
import ResourceEnum from "../enums/resource.enum";
import starshipInstallTechnologyInlineKeyboard from "./starshipInstallTechnologyInline.keyboard";
import selfCompanyInlineKeyboard from "./selfCompanyInline.keyboard";
import nameChangeTooltipKeyboard from "./nameChangeTooltip.keyboard";
import coloniesSelfInfoKeyboard from "./coloniesSelfInfo.keyboard";
import foundColonyInlineKeyboard from "./foundColonyInline.keyboard";
import travelToSystemDirectTooltipKeyboard from "./travelToSystemDirectTooltip.keyboard";
import colonyInfoInlineKeyboard from "./colonyInfoInline.keyboard";
import colonyManageKeyboard from "./colonyManage.keyboard";
import buildingManageIncompleteKeyboard from "./buildingManageIncomplete.keyboard";

const KEYBOARDS = {
    DEFAULT: DefaultKeyboard,
    STOCKS: StocksKeyboard,
    STARSHIP: StarshipKeyboard,
    SYSTEM_TRAVEL_INLINE: (coordinates: string) => mapTravelKeyboard(coordinates),
    PLANET_SCANNER_INLINE: (coordinates: string) => planetScannerInlineKeyboard(coordinates),
    SYSTEM_TRAVEL_CONFIRM_INLINE: (coordinates: string) => mapTravelConfirmInlineKeyboard(coordinates),
    STARSHIP_INSTALL_TECH_INLINE: (tech: ResourceEnum) => starshipInstallTechnologyInlineKeyboard(tech),
    SELF_COMPANY_INFO_INLINE: selfCompanyInlineKeyboard,
    COMPANY_CHANGE_NAME_TOOLTIP: nameChangeTooltipKeyboard,
    COLONIES_SELF_INFO: coloniesSelfInfoKeyboard,
    FOUND_COLONY_HERE: (c: string, i: number) => foundColonyInlineKeyboard(c, i),
    TRAVEL_TO_SYSTEM_TOOLTIP: (c: string) => travelToSystemDirectTooltipKeyboard(c),
    COLONY_INFO_INLINE: (id: string) => colonyInfoInlineKeyboard(id),
    COLONY_MANAGE_INLINE: (id: string) => colonyManageKeyboard(id),
    BUILDING_MANAGE_INCOMPLETE: (id: string, module: string) => buildingManageIncompleteKeyboard(id, module)
}

export default KEYBOARDS