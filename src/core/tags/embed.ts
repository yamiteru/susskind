import { DoubleTag } from "../utils";

export const Embed = DoubleTag<{
  height?: number;
  src: string;
  type?: string;
  width?: number;
}>("embed");
