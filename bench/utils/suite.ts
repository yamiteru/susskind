import m from "./median";
import a from "./average";
import s from "./sum";
import o from "./ops";
import now from "./now";

const suite = <T extends Record<string, any>>(
    cb: (data: T) => void,
    data: T,
    runs: number
) => {
    const times = new Uint8Array(runs);

    let i = -1;
    while(++i < runs) {
        const start = now();
        cb(data);
        const end = now();
        times.set([Number(end - start)], i);
    }

    const sum = s(times);
    const medianTime = m(times);
    const medianOps = o(medianTime);
    const median = { time: medianTime, ops: medianOps };
    const averageTime = a(times);
    const averageOps = o(averageTime);
    const average = { time: averageTime, ops: averageOps };

    return {
        sum,
        median,
        average,
    };
};

export default suite;