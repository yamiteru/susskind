import {Children, StoreRef} from "../types/common";
import renderChildren from "../utils/help/renderChildren";

export const Switch = <S extends StoreRef>(...cases: ((store: S) => string)[]) =>
    (...fallback: Children<S>) =>
        (store: S) => {
            const l = cases.length;

            for(let i = 0; i < l; i++) {
                const tmp = cases[i](store);
                if(tmp !== "") return tmp;
            }

            return renderChildren(fallback, store);
        };