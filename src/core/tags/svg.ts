import { DoubleTag } from "../utils";

export const Svg = DoubleTag<{
  width?: number;
  height?: number;
  viewBox?: string;
  preserveAspectRatio?: string;
  x?: number;
  y?: number;
}>("svg");
