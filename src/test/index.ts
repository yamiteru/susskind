import {startApp} from "../server";
import {App} from "uWebSockets.js";

import IndexData from "./pages/index.data";
import IndexPage from "./pages/index.page";

startApp(App())({
    "/": {
        data: IndexData,
        page: IndexPage
    }
});