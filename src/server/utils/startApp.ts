import {TemplatedApp} from "uWebSockets.js";
import {asyncHandler} from "./asyncHandler";
import {Routes} from "../types";
import {Object} from "../../core/types/common";

export const startApp = (app: TemplatedApp, port: number = 3000) =>
    <T extends Object, U extends Object>(routes: Routes<T, U>) => {
        for (const pattern in routes) app
            .get(pattern, asyncHandler(routes[pattern]));

        return app.listen(port, (soc) =>
            soc && console.log(`Listening to port ${port}`)
        );
    };