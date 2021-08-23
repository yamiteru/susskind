export const For = <T extends any[]>(arr: T) =>
    (children: (v: T[number], i: number) => string) => {
        let res: string = "";
        const l = arr.length;

        let i = -1;
        while (++i < l) res += children(arr[i], i)

        return res;
    };