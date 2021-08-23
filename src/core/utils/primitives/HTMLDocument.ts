import {Children} from "../../types/common";
import {Document} from "./Document";
import renderChildren from "../help/renderChildren";
import {Body, Head, Html} from "../../tags";

export const HTMLDocument = (...headChildren: Children) =>
    (...bodyChildren: Children) =>
        Document("text/html", renderChildren([
            Html()(
                Head()(...headChildren),
                Body()(...bodyChildren),
            )
        ]));