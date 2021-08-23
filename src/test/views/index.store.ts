import {IndexProps} from "./index.data";

const IndexStore = (s: Readonly<IndexProps>) => ({
    lowerCaseName: s.name.toLowerCase(),
    links: s.links
});

export type IndexStoreMethods = ReturnType<typeof IndexStore>;

export default IndexStore;