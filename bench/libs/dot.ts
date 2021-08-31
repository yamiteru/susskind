import {Data} from "../data";
import {template} from "dot";

const dot = (data: Data) => {
    return template(`
        <div>
            {{~it.horizontal: i}}
                <ul></ul>
            {{~}}
        </div>
    `)(data) as string;
};

export default dot;