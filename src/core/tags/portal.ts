import { DoubleTag } from "../utils";
import { ReferrerPolicy } from "../types/common";

export const Portal = DoubleTag<{
  referrerpolicy?: ReferrerPolicy;
  src?: string;
}>("portal");
