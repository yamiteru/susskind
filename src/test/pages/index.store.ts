import {IndexProps} from "./index.data";
import {storeBuilder} from "../../core/utils";

const IndexStore = (data: IndexProps) => storeBuilder(data)({
    lowerCaseName: (s) => s.deref()?.name.toLowerCase() || null,
    links: (s) => s.deref()?.links || []
});

export type IndexStoreMethods = ReturnType<typeof IndexStore>;

export default IndexStore;