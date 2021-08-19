export const For = <T extends any[]>(arr: T) =>
    (children: (v: T[number], i: number) => string): string => {
        let res: string = "";
        const l = arr.length;

        for (let i = 0; i < l; i++) {
            res += children(arr[i], i);
        }

        return res;
    };