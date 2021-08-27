import suite from "./suite";

const benchmark = <T extends Record<string, any>>(
    suites: [name: string, cb: (data: T) => void][],
    data: T,
    runs: number = 10
) => {
    const results: Record<string, ReturnType<typeof suite>> = {};

    let i = -1;
    while (++i < suites.length) {
        const [ name, cb ] = suites[i];
        results[name] = suite(cb, data, runs);
    }

    console.log(results);
};

export default benchmark;