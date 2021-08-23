import {Attributes} from "../../types/common";

const propsToString = (props?: Attributes) => {
    if(props) {
        let res: string = "";
        for (const k in props) res += ` ${k}="${(props as any)[k]}"`;
        return res;
    }

    else return "";
};

export default propsToString;