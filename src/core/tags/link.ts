import doubleTag from "../utils/tag/doubleTag";
import { ReferrerPolicy, As } from "../types/common";

export const link = doubleTag<{
  as?: As;
  crossorigin?: string;
  disabled?: boolean;
  hreflang?: string;
  href?: string;
  imagesizes?: string;
  imagesrcset?: string;
  integrity?: string;
  media?: string;
  prefetch?: string;
  referrerpolicy?: ReferrerPolicy;
  rel?: string;
  sizes?: string;
  title?: string;
  type?: string;
}>("link");
