import singleTag from "./singleTag";
import propsToString from "../help/propsToString";
import renderChildren from "../help/renderChildren";
import {Children, Props} from "../../types/common";

const doubleTag = <T>(type: string) =>
    (props?: T & Props) =>
        (...children: Children) => children.length
            ? `<${type}${propsToString(props)}>${renderChildren(children)}</${type}>`
            : singleTag(type)(props)();

export default doubleTag;