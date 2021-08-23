import {Children, StoreRef} from "../../types/common";

const renderChildren = <S extends StoreRef>(children: Children<S>, store: S): string => {
    let res = "";
    const length = children.length;

    for(let i = 0; i < length; i++) {
        const tmp = children[i];
        res += typeof tmp === "string" ? tmp: tmp(store);
    }

    return res;
};

export default renderChildren;