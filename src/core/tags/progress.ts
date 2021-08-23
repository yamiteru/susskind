import { DoubleTag } from "../utils";

export const Progress = DoubleTag<{
  max?: number;
  value?: number;
}>("progress");
