import {Data} from "../data";
import {compile} from "pug";

const pug = (data: Data) => {
    return compile(`div
    each i in horizontal
      ul`)(data);
};

export default pug;