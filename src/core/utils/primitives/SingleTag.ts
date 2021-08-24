import propsToString from "../help/propsToString";
import {Attributes, Maybe} from "../../types/common";

export const SingleTag = <A>(type: string) =>
    (props?: Maybe<A & Attributes>) =>
        `<${type}${propsToString(props)}/>`;