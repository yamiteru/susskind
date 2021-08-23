import {Children, StoreRef} from "../../types/common";
import {Document} from "./Document";
import renderChildren from "../help/renderChildren";

export const SVGDocument = <S extends StoreRef>(...children: Children<S>) =>
    (store: S) =>
        Document<S>("image/svg+xml", renderChildren<S>(
            children, store)
        );