import {Data} from "../types";
import {Store, StoreGetters, View} from "../../core/types/common";

export const route = <A, B extends StoreGetters>(
    data: Data<A>,
    store: Store<A, B>,
    view: View<B>
) => ({ data, store, view });