import {Children} from "../types/common";
import renderChildren from "../utils/help/renderChildren";

export const Switch = (...cases: (() => string)[]) =>
    (...fallback: Children): string => {
        const l = cases.length;

        for(let i = 0; i < l; i++) {
            const tmp = cases[i]();
            if(tmp !== "") return tmp;
        }

        return renderChildren(fallback);
    };