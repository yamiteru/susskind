import doubleTag from "../utils/tag/doubleTag";
import { ReferrerPolicy, Target, Coords } from "../types/common";

export const Area = doubleTag<{
  alt?: string;
  coords?: Coords;
  download?: string;
  href: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: ReferrerPolicy;
  rel?: string;
  shape?: string;
  target?: Target;
}>("area");
