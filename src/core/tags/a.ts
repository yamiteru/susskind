import { DoubleTag } from "../utils";
import { ReferrerPolicy, Target } from "../types/common";

export const A = DoubleTag<{
  download?: string;
  href: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: ReferrerPolicy;
  rel?: string;
  target?: Target;
  type?: string;
}>("a");
