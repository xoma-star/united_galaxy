import DefaultKeyboard from "./default.keyboard";
import StocksKeyboard from "./stocks.keyboard";
import StarshipKeyboard from "./starship.keyboard";
import mapTravelKeyboard from "./mapTravel.keyboard";
import planetScannerInlineKeyboard from "./planetScannerInline.keyboard";
import mapTravelConfirmInlineKeyboard from "./mapTravelConfirmInline.keyboard";

const KEYBOARDS = {
    DEFAULT: DefaultKeyboard,
    STOCKS: StocksKeyboard,
    STARSHIP: StarshipKeyboard,
    SYSTEM_TRAVEL_INLINE: (coordinates: string) => mapTravelKeyboard(coordinates),
    PLANET_SCANNER_INLINE: (coordinates: string) => planetScannerInlineKeyboard(coordinates),
    SYSTEM_TRAVEL_CONFIRM_INLINE: (coordinates: string) => mapTravelConfirmInlineKeyboard(coordinates)
}

export default KEYBOARDS