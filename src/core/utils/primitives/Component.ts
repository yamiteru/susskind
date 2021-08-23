import {Child, Children, Object, StoreGetters} from "../../types/common";
import renderChildren from "../help/renderChildren";

export const Component = <S extends StoreGetters = any, P extends Object = any>(template: (store: S, props?: P, children?: Children<S>) => Child<S>) =>
    (props?: P) =>
        (...children: Children<S>) =>
            (store: S) => renderChildren<S>(
                [template(store, props, children)],
                store
            );