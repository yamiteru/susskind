import {TemplatedApp} from "uWebSockets.js";
import {asyncHandler} from "./asyncHandler";
import {Routes} from "../types";
import {Object as O} from "../../core/types/common";

export const startApp = (app: TemplatedApp, port: number = 3000) =>
    <T extends O, U extends O>(routes: Routes<T, U>) => {
        const patterns = Object.keys(routes);
        const l = patterns.length;

        let i = -1;
        while(++i < l) {
            const pattern = patterns[i];
            app.get(pattern, asyncHandler(routes[pattern]));
        }

        return app.listen(port, (soc) =>
            soc && console.log(`Listening to port ${port}`)
        );
    };