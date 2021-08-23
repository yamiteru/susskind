export const Switch = (...cases: (() => string)[]) =>
    (fallback: string) => {
        const l = cases.length;

        let i = -1;
        while (++i < l) {
            const tmp = cases[i]();
            if (tmp !== "") return tmp;
        }

        return fallback;
    };