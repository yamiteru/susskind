import {Children, StoreGetters} from "../../types/common";
import {Document} from "./Document";
import renderChildren from "../help/renderChildren";
import {Body, Head, Html} from "../../tags";

export const HTMLDocument = <S extends StoreGetters>(...headChildren: Children<S>) =>
    (...bodyChildren: Children<S>) =>
        (store: S) =>
            Document<S>("text/html", renderChildren<S>([
                Html()(
                    Head()(...headChildren),
                    Body()(...bodyChildren),
                )
            ], store));