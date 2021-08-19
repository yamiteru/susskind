import singleTag from "./singleTag";
import propsToString from "../help/propsToString";
import {Children, Props} from "../../types";
import renderChildren from "../help/renderChildren";

const doubleTag = <T>(type: string) =>
    (props?: T & Props) =>
        (...children: Children) => children.length
            ? `<${type}${propsToString(props)}>${renderChildren(children)}</${type}>`
            : singleTag(type)(props)();

export default doubleTag;