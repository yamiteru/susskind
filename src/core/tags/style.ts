import doubleTag from "../utils/tag/doubleTag";

export const Style = doubleTag<{
  type?: string;
  media?: string;
  nonce?: number;
  title?: string;
}>("style");
