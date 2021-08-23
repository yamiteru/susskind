import {Children} from "../../types/common";

const renderChildren = (children: Children) => {
    const l = children.length;
    let res = "";

    let i = -1;
    while(++i < l) res += children[+i];

    return res;
};

export default renderChildren;