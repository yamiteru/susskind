import {Children, StoreGetters} from "../types/common";
import renderChildren from "../utils/help/renderChildren";

export const Switch = <S extends StoreGetters>(...cases: ((store: S) => string)[]) =>
    (...fallback: Children<S>) =>
        (store: S) => {
            const l = cases.length;

            let i = -1;
            while(++i < l) {
                const tmp = cases[i](store);
                if(tmp !== "") return tmp;
            }

            return renderChildren(fallback, store);
        };