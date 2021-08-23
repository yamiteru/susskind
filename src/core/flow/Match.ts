import {Children, StoreGetters} from "../types/common";
import {Show} from "./Show";

export const Match = (predicate: () => boolean) =>
    <S extends StoreGetters>(...children: Children<S>) =>
        (store: S): string => Show(predicate)<S>(...children)(store);