import {AnyDocument, StoreRef} from "../../types/common";

export const Document = <S extends StoreRef>(type: string, view: string): AnyDocument =>
    ({ type, view });