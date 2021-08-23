import {AnyDocument} from "../../types/common";

export const Document = (type: string, view: string): AnyDocument =>
    ({ type, view });