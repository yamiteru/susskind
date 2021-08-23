import { DoubleTag } from "../utils";

export const Meter = DoubleTag<{
  value?: number;
  min?: number;
  max?: number;
  low?: number;
  high?: number;
  optimum?: number;
  form?: string;
}>("meter");
