import {Data} from "../types";
import {Store, StoreRef, View} from "../../core/types/common";

export const route = <A, B extends StoreRef>(
    data: Data<A>,
    store: Store<A, B>,
    view: View<B>
) => ({ data, store, view });