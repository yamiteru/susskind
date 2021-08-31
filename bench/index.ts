import benchmark from "./utils/benchmark";
import data from "./data";

import dot from "./libs/dot";
import susskind from "./libs/susskind";
import vanilla from "./libs/vanilla";
import pug from "./libs/pug";

const PRECISION = 20;
const RUNS = 20;
const TIMEOUT = 100;
const SUITES: [name: string, cb: (data: any) => void][] = [
    ["vanilla", vanilla],
    ["susskind", susskind],
    ["dot", dot],
    ["pug", pug],
];

SUITES
    .map(([k]) => k)
    .sort()
    .forEach((k) =>
        console.log(`${k[0].toUpperCase()} = ${k}`)
    );
console.log("");
console.log("");

data
    .map((v) => ({
        sample: v.horizontal.length,
        results: benchmark(SUITES, v, RUNS, TIMEOUT)
    }))
    .forEach(({sample, results}) => {
        const keys = Object.keys(results).sort();
        const values = Object.values(results);
        const min = Math.min(...values);
        const max = Math.max(...values);
        const step = (max - min) / PRECISION;

        console.log(`### ${sample}`);
        console.log("");
        console.log("--- DATA");
        keys.forEach((k) =>
            console.log(k[0].toUpperCase(), `${results[k]} ops/s`)
        );
        console.log("");
        console.log("--- GRAPH");
        keys.forEach((k) => {
            const v = results[k];
            const line = [k[0].toUpperCase(), " ", ...[...Array(PRECISION)]
                .map((_, i) =>
                    (step * (i + 1)) <= v ? "#": "-"
                )
            ].join("");

            console.log(line);
        });
        console.log("");
        console.log("");
    });