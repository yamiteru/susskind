import { DoubleTag } from "../utils";

export const Style = DoubleTag<{
  type?: string;
  media?: string;
  nonce?: number;
  title?: string;
}>("style");
