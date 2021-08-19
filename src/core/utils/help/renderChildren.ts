import {Children} from "../../types/common";

const renderChildren = (children: Children): string => {
    let res = "";
    const length = children.length;

    for(let i = 0; i < length; i++) res += children[i];

    return res;
};

export default renderChildren;