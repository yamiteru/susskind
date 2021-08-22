import doubleTag from "../utils/tag/doubleTag";
import { ReferrerPolicy } from "../types/common";

export const Script = doubleTag<{
  src: string;
  async?: boolean;
  crossorigin?: string;
  defer?: boolean;
  integrity?: string;
  nomodule?: boolean;
  nonce?: number;
  referrerpolicy?: ReferrerPolicy;
  type?: string;
}>("script");
