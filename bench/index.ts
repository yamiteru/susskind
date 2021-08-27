import benchmark from "./utils/benchmark";
import data from "./data";

import susskind from "./libs/susskind";

benchmark([
    ["susskind", susskind]
], data, 10);