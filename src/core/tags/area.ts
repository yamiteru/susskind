import { DoubleTag } from "../utils";
import { ReferrerPolicy, Target, Coords } from "../types/common";

export const Area = DoubleTag<{
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
