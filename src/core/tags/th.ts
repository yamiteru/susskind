import doubleTag from "../utils/tag/doubleTag";

export const Th = doubleTag<{
  abbr?: string;
  colspan?: number;
  headers?: string;
  rowspan?: number;
  scope?: string;
}>("th");
