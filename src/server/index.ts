import {App} from "uWebSockets.js";
import {a, body, h1, head, html, li, title, ul} from "../core";
import {Document} from "./types";
import {links} from "./data/homepage";

const PORT = 3000;

const document: Document = () => html()(
    head()(
        title()("Test - Homepage"),
    ),
    body()(
        h1()("Hello World!"),
        ul()(
            ...links.map(([title, link]) =>
                li()(
                    a({ href: link })(title)
                )
            )
        )
    ),
);

App()
    .get("/*", (res, req) => res
        .writeStatus("200 OK")
        .end(document(req)))
    .listen(PORT, (soc) =>
        soc && console.log(`Listening to port ${PORT}`)
    );