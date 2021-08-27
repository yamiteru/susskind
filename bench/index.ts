import benchmark from "./utils/benchmark";
import data from "./data";

import dot from "./libs/dot";
import susskind from "./libs/susskind";
import vanilla from "./libs/vanilla";
import pug from "./libs/pug";

benchmark([
    ["vanilla", vanilla],
    ["susskind", susskind],
    ["dot", dot],
    ["pug", pug],
], data, 10);