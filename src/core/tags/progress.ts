import doubleTag from "../utils/tag/doubleTag";

export const Progress = doubleTag<{
  max?: number;
  value?: number;
}>("progress");
