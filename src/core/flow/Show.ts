import {Children, StoreGetters} from "../types/common";
import renderChildren from "../utils/help/renderChildren";

export const Show = (predicate: () => boolean) =>
    <S extends StoreGetters>(...children: Children<S>) =>
        (store: S) => {
            if(predicate()) return renderChildren(children, store);
            else return "";
        };