import { DoubleTag } from "../utils";
import { ReferrerPolicy, As } from "../types/common";

export const Link = DoubleTag<{
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
