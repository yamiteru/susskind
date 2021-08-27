import {Data} from "../data";
import {template} from "dot";

const dot = (data: Data) => {
    return template(`
        <div id="root" className="app">
            {{~it.horizontal: i}}
                <ul id="list-{{=i}}" className="list">
                    {{~it.horizontal: j}}
                        <li id="list-{{=i}}-item-{{=j}}" className="item">
                            Item {{=j}} inside list {{=i}}
                        </li>
                    {{~}}
                </ul>
            {{~}}
        </div>
    `)(data) as string;
};

export default dot;