import {HttpRequest} from "uWebSockets.js";
import {Component} from "../core/types/common";

export type Data<T> = (req: HttpRequest) => Promise<T>;

export type Page<T> = Component<T>; 

export type Route<T> = {
    data: Data<T>;
    page: Page<T>;
};

export type Routes<T extends Object> = {
    [K in keyof T]: Route<T[K]>;
};