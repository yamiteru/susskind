import {Children, StoreGetters} from "../../types/common";

const renderChildren = <S extends StoreGetters>(children: Children<S>, store: S): string => {
    let res = "";

    const l = children.length;
    let i = -1;
    while(++i < l) {
        const tmp = children[+i];
        res += typeof tmp === "string" ? tmp: tmp(store);
    }

    return res;
};

export default renderChildren;