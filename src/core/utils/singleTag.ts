import {Props} from "../types";
import propsToString from "./propsToString";

const singleTag = <T>(type: string) =>
    (props?: T & Props) =>
        () => `<${type}${propsToString(props)}/>`;

export default singleTag;