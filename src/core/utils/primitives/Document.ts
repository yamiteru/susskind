import {AnyDocument, StoreGetters} from "../../types/common";

export const Document = <S extends StoreGetters>(type: string, view: string): AnyDocument =>
    ({ type, view });