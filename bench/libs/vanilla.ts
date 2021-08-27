import {Data} from "../data";

const vanilla = ({ horizontal, vertical }: Data) => {
    let content = "";

    let i = -1;
    while (++i < horizontal.length) {
        let ul = "<ul>";

        let j = -1;
        while (++j < vertical.length) {
            ul += `
                <li id="list-${i}-item-${j}">
                    Item ${j} inside list ${i}
                </li>
            `;
        }

        content += `${ul}</ul>`
    }

    return `
        <div id="root" className="app">
            ${content}
        </div>
    `;
};

export default vanilla;