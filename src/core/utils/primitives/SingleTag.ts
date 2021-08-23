import propsToString from "../help/propsToString";
import {Props} from "../../types/common";

export const SingleTag = <T>(type: string) =>
    (props?: T & Props) =>
        () =>
            () =>
                `<${type}${propsToString(props)}/>`;