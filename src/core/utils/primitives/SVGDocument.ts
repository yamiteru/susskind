import {Children} from "../../types/common";
import {Document} from "./Document";
import renderChildren from "../help/renderChildren";

export const SVGDocument = (...children: Children) =>
    Document("image/svg+xml", renderChildren(children));