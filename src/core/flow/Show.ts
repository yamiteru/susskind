import {Children, StoreRef} from "../types/common";
import renderChildren from "../utils/help/renderChildren";

export const Show = (predicate: () => boolean) =>
    <S extends StoreRef>(...children: Children<S>) =>
        (store: S) => {
            if(predicate()) return renderChildren(children, store);
            else return "";
        };