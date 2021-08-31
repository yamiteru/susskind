import {Data} from "../data";

const vanilla = ({ horizontal }: Data) => {
    let content = "";

    let i = -1;
    while (++i < horizontal.length) {
        content += "<ul></ul>";
    }

    return `
        <div>
            ${content}
        </div>
    `;
};

export default vanilla;