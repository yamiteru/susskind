import {HttpRequest} from "uWebSockets.js";
import {Object, Store, StoreRef, View} from "../core/types/common";

export type Data<O extends Object> = (req: HttpRequest) => Promise<O>;

export type Route<I, S extends StoreRef> = {
    data: Data<I>;
    store: Store<I, S>;
    view: View<S>;
};

export type Routes<T extends Record<string, any>, U> = {
    [K in keyof T]: Route<T[K], any>;
};