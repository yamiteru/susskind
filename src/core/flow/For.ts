import {Children, StoreGetters} from "../types/common";

export const For = <T extends any[]>(arr: T) =>
    <S extends StoreGetters>(children: (v: T[number], i: number) => Children<S>[number]) =>
        (store: S): string => {
            let res: string = "";
            const l = arr.length;

            let i = -1;
            while(++i < l) {
                const tmp = children(arr[i], i);
                res += typeof tmp === "string" ? tmp : tmp(store);
            }

            return res;
        };