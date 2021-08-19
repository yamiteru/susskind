import {Props} from "../../types";

const propsToString = (props?: Props) => {
    if(props) {
        let res: string = "";
        for (const k in props) res += ` ${k}="${(props as any)[k]}"`;
        return res;
    }

    else return "";
};

export default propsToString;