import {Children, StoreRef} from "../types/common";
import {Show} from "./Show";

export const Match = (predicate: () => boolean) =>
    <S extends StoreRef>(...children: Children<S>) =>
        (store: S): string => Show(predicate)<S>(...children)(store);