import {HttpRequest, HttpResponse} from "uWebSockets.js";
import {Route} from "../types";
import {StoreGetters} from "../../core/types/common";

const { hrtime } = process;

export const asyncHandler = <I, S extends StoreGetters>(route: Route<I, S>) =>
    async (res: HttpResponse, req: HttpRequest) => {
        res.onAborted(() => res.aborted = true);

        const start = hrtime.bigint();

        const data = await route.data(req);
        const store = route.store(data);
        const { view, type } = route.view(store);

        const end = hrtime.bigint();
        const ns = end - start;
        const ms = (Number(ns) / 1000000).toFixed(5);

        console.log(`${req.getUrl()} -> ${ms} ms / ${ns} ns`);

        !res.aborted && res.cork(() => res
            .writeHeader("Access-Control-Allow-Origin", "*")
            .writeHeader("Access-Control-Allow-Headers", "content-type")
            .writeHeader("Content-Type", type)
            .writeStatus("200 OK")
            .end(view));
    };