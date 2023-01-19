import ResourceEnum from "../enums/resource.enum";
import globalConstant from "../constants/global.constant";
import ResourcesConstant from "../constants/resources.constant";

const calculateCargoLoad = (cargo: {[K in keyof typeof ResourceEnum]?: number}) => {
    return (Object.keys(cargo) as ResourceEnum[])
            .map(x => (cargo[x] || 0) * globalConstant.storageCapacity[ResourcesConstant[x].size])
            .reduce((a, b) => (a || 0) + (b || 0), 0)
}

export default calculateCargoLoad