import { DoubleTag } from "../utils";
import { Target } from "../types/common";

export const Base = DoubleTag<{
  href: string;
  target?: Target;
}>("base");
