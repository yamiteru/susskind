import {Children} from "../types/common";
import {Show} from "./Show";

export const Match = (predicate: () => boolean) =>
    (...children: Children) =>
        (): string => Show(predicate)(...children);