import doubleTag from "../utils/tag/doubleTag";
import { ReferrerPolicy } from "../types/common";

export const Portal = doubleTag<{
  referrerpolicy?: ReferrerPolicy;
  src?: string;
}>("portal");
