import DefaultKeyboard from "./default.keyboard";
import StocksKeyboard from "./stocks.keyboard";
import StarshipKeyboard from "./starship.keyboard";
import mapTravelKeyboard from "./mapTravel.keyboard";

const KEYBOARDS = {
    DEFAULT: DefaultKeyboard,
    STOCKS: StocksKeyboard,
    STARSHIP: StarshipKeyboard,
    SYSTEM_TRAVEL_INLINE: (coordinates: string) => mapTravelKeyboard(coordinates)
}

export default KEYBOARDS