import doubleTag from "../utils/tag/doubleTag";

export const Svg = doubleTag<{
  width?: number;
  height?: number;
  viewBox?: string;
  preserveAspectRatio?: string;
  x?: number;
  y?: number;
}>("svg");
