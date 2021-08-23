import {Children, StoreRef} from "../types/common";

export const For = <T extends any[]>(arr: T) =>
    <S extends StoreRef>(children: (v: T[number], i: number) => Children<S>[number]) =>
        (store: S): string => {
            let res: string = "";
            const l = arr.length;

            for (let i = 0; i < l; i++) {
                const tmp = children(arr[i], i);
                res += typeof tmp === "string" ? tmp : tmp(store);
            }

            return res;
        };