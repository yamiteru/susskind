import {startApp} from "../server";
import {App} from "uWebSockets.js";
import {route} from "../server/utils/route";

import IndexData from "./pages/index.data";
import IndexPage from "./pages/index.page";
import IndexStore from "./pages/index.store";

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
            IndexPage,
        )
    });
}