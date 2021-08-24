import {Show} from "./Show";

export const Match = (predicate: () => boolean, children: () => string) =>
    () => Show(predicate, children);