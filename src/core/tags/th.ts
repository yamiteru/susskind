import { DoubleTag } from "../utils";

export const Th = DoubleTag<{
  abbr?: string;
  colspan?: number;
  headers?: string;
  rowspan?: number;
  scope?: string;
}>("th");
