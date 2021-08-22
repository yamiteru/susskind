import doubleTag from "../utils/tag/doubleTag";

export const Meter = doubleTag<{
  value?: number;
  min?: number;
  max?: number;
  low?: number;
  high?: number;
  optimum?: number;
  form?: string;
}>("meter");
