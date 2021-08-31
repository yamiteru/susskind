import propsToString from "../help/propsToString";
import renderChildren from "../help/renderChildren";
import {Children, Attributes, Maybe} from "../../types/common";

export const DoubleTag = <A>(type: string) =>
    (props?: Maybe<A & Attributes>, children?: Children) =>
        `<${type}${propsToString(props)}>${renderChildren(children)}</${type}>`