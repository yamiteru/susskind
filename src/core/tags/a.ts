import doubleTag from "../utils/doubleTag";
import { ReferrerPolicy, Target } from "../types";

export const a = doubleTag<{
  download?: string;
  href: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: ReferrerPolicy;
  rel?: string;
  target?: Target;
  type?: string;
}>("a");
