import {Props} from "../../types";
import propsToString from "../help/propsToString";

const singleTag = <T>(type: string) =>
    (props?: T & Props) =>
        () => `<${type}${propsToString(props)}/>`;

export default singleTag;