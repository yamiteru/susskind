import {Attributes} from "../../types/common";

const propsToString = (props?: Attributes) => {
    if(props) {
        const keys = Object.keys(props);
        const l = keys.length;
        let res: string = "";

        let i = -1;
        while(++i < l) {
            const k = keys[i];
            res += ` ${k}="${(props as any)[k]}"`;
        }

        return res;
    }

    else return "";
};

export default propsToString;