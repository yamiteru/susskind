import doubleTag from "../utils/tag/doubleTag";

export const Embed = doubleTag<{
  height?: number;
  src: string;
  type?: string;
  width?: number;
}>("embed");
