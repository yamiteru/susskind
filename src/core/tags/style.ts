import doubleTag from "../utils/doubleTag";

export const style = doubleTag<{
  type?: string;
  media?: string;
  nonce?: number;
  title?: string;
}>("style");
