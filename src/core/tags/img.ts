import { DoubleTag } from "../utils";
import { ReferrerPolicy } from "../types/common";

export const Img = DoubleTag<{
  alt?: string;
  crossorigin?: string;
  decoding?: string;
  height?: number;
  ismap?: boolean;
  loading?: string;
  referrerpolicy?: ReferrerPolicy;
  sizes?: string;
  src?: string;
  width?: number;
}>("img");
