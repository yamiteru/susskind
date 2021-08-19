import doubleTag from "../utils/tag/doubleTag";

export const style = doubleTag<{
  type?: string;
  media?: string;
  nonce?: number;
  title?: string;
}>("style");
