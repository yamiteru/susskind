import propsToString from "../help/propsToString";
import {Props} from "../../types/common";

const singleTag = <T>(type: string) =>
    (props?: T & Props) =>
        () => `<${type}${propsToString(props)}/>`;

export default singleTag;