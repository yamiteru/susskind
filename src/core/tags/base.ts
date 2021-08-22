import doubleTag from "../utils/tag/doubleTag";
import { Target } from "../types/common";

export const Base = doubleTag<{
  href: string;
  target?: Target;
}>("base");
