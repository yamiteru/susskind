import {HttpRequest} from "uWebSockets.js";
import {Object, Store, StoreGetters, View} from "../core/types/common";

export type Data<O extends Object> = (req: HttpRequest) => Promise<O>;

export type Route<I, S extends StoreGetters> = {
    data: Data<I>;
    store: Store<I, S>;
    view: View<S>;
};

export type Routes<T extends Record<string, any>, U> = {
    [K in keyof T]: Route<T[K], any>;
};