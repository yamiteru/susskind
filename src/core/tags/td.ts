import doubleTag from "../utils/tag/doubleTag";

export const Td = doubleTag<{
  colspan?: number;
  headers?: string;
  rowspan?: number;
}>("td");
