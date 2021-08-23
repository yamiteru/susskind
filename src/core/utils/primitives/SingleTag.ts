import propsToString from "../help/propsToString";
import {Attributes} from "../../types/common";

export const SingleTag = <A>(type: string) =>
    (props?: A & Attributes) =>
        () =>
            () =>
                `<${type}${propsToString(props)}/>`;