import {Data} from "../data";
import {compile} from "pug";

const pug = (data: Data) => {
    return compile(`div(id="root", className="root")
    each i in horizontal
      ul(id="list" + i, className="list")
        each j in vertical
          li(id="list" + i + "item" + j, className="item")`)(data);
};

export default pug;