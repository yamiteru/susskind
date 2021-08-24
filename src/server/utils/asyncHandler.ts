import {HttpRequest, HttpResponse} from "uWebSockets.js";
import {Route} from "../types";
import {StoreGetters} from "../../core/types/common";

const { hrtime } = process;

const ms = (ns: BigInt) => (Number(ns) / 1000000).toFixed(5);

export const asyncHandler = <I, S extends StoreGetters>(route: Route<I, S>) =>
    async (res: HttpResponse, req: HttpRequest) => {
        res.onAborted(() => res.aborted = true);

        const data = await route.data(req);

        const sStore = hrtime.bigint();
        const store = route.store(Object.freeze(data));
        const eStore = hrtime.bigint();

        const sView = hrtime.bigint();
        const { view, type } = route.view(store);
        const eView = hrtime.bigint();

        const tStore = eStore - sStore;
        const tView = eView - sView;
        const tAll = tStore + tView;

        console.log(`${req.getUrl()} -> ${ms(tAll)}ms [${ms(tStore)}, ${ms(tView)}]`);

        !res.aborted && res.cork(() => res
            .writeHeader("Access-Control-Allow-Origin", "*")
            .writeHeader("Access-Control-Allow-Headers", "content-type")
            .writeHeader("Content-Type", type)
            .writeStatus("200 OK")
            .end(view));
    };