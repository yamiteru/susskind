import {SingleTag} from "./singleTag";
import propsToString from "../help/propsToString";
import renderChildren from "../help/renderChildren";
import {Children, Props, StoreRef} from "../../types/common";

export const DoubleTag = <T>(type: string) =>
    (props?: T & Props) =>
        <S extends StoreRef>(...children: Children<S>) =>
            (store: S) =>
                children.length
                    ? `<${type}${propsToString(props)}>${renderChildren<S>(children, store)}</${type}>`
                    : SingleTag(type)(props)()();