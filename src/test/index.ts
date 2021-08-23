import {startApp} from "../server";
import {App} from "uWebSockets.js";
import {route} from "../server/utils/route";

import IndexData from "./views/index.data";
import IndexView from "./views/index.view";
import IndexStore from "./views/index.store";

import * as cluster from "cluster";
import {Cluster} from "cluster";
import {cpus} from "os";

const c: Cluster = cluster as any;

if(c.isPrimary) {
    const n_cpus = cpus().length;

    for (let i = 0; i < n_cpus; i++) c.fork();

    c.on("exit", (w, o) =>
        o !== 0 && !w.exitedAfterDisconnect && c.fork()
    );
} else {
    startApp(App())({
        "/": route(
            IndexData,
            IndexStore,
            IndexView,
        )
    });
}