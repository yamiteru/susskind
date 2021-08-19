import {Children} from "../types/common";
import renderChildren from "../utils/help/renderChildren";

export const Show = (predicate: () => boolean) =>
    (...children: Children): string => {
        if(predicate()) return renderChildren(children);
        else return "";
    };