import doubleTag from "../utils/doubleTag";
import { ReferrerPolicy } from "../types";

export const script = doubleTag<{
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
