import m from "./median";
import now, {MS} from "./now";

const suite = <T extends Record<string, any>>(
    cb: (data: T) => void,
    data: T,
    runs: number,
    timeout: number,
) => {
    let results = Array(runs);

    let i = -1;
    while(++i < runs) {
        const start = now();
        const max = BigInt(timeout) * MS;
        let ops = 0;

        while (now() - start < max) {
            cb(data);
            ++ops;
        }

        results[i] = ops;
    }

    return m(results) * (1000 / timeout);
};

export default suite;
