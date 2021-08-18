import {HttpRequest, HttpResponse} from "uWebSockets.js";
import {Route} from "../types";

export const routeHandler = <T>(route: Route<T>) =>
    async (res: HttpResponse, req: HttpRequest) => {
        res.onAborted(() => res.aborted = true);

        const data = await route.data(req);
        const view = route.page(data)();

        !res.aborted && res.cork(() => res
            .writeHeader("Access-Control-Allow-Origin", "*")
            .writeHeader("Access-Control-Allow-Headers", "content-type")
            .writeHeader("Content-Type", "text/html")
            .writeStatus("200 OK")
            .end(view));
    };