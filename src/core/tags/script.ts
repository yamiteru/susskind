import { DoubleTag } from "../utils";
import { ReferrerPolicy } from "../types/common";

export const Script = DoubleTag<{
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
