import {startApp} from "../server";
import {App} from "uWebSockets.js";
import {route} from "../server/utils/route";

import IndexData from "./pages/index.data";
import IndexPage from "./pages/index.page";
import IndexStore from "./pages/index.store";

startApp(App())({
    "/": route(
        IndexData,
        IndexStore,
        IndexPage,
    )
});