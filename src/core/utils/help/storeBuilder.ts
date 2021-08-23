import {Object as O} from "../../types/common";

export const storeBuilder = <T extends O>(data: T) => <U extends Record<string, (store: WeakRef<T>) => any>>(selectors: U) => {
    const staticData: WeakRef<T> = new WeakRef(Object.freeze(data));
    const x: {
        [K in keyof U]: () => ReturnType<U[K]>
    } = {} as any;

    for (const k in selectors) {
        x[k] = () => selectors[k](staticData);
    }

    return x;
};