import doubleTag from "../utils/doubleTag";
import {AnchorReferrerPolicy, AnchorTarget} from "../types";

export const a = doubleTag<{
    download?: string
    href: string;
    hreflang?: string;
    ping?: string;
    referrerpolicy?: AnchorReferrerPolicy;
    rel?: string;
    target?: AnchorTarget;
    type?: string;
}>("a");