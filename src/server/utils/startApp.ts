import {TemplatedApp} from "uWebSockets.js";
import {Object} from "../../core/types";
import {Routes} from "../types";
import routeHandler from "./routeHandler";

const startApp = (app: TemplatedApp, port: number = 3000) =>
    <T extends Object>(routes: Routes<T>) => {
        for (const pattern in routes) app
            .get(pattern, routeHandler(routes[pattern]));

        return app.listen(port, (soc) =>
            soc && console.log(`Listening to port ${port}`)
        );
    };

export default startApp;