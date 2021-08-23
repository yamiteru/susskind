import { DoubleTag } from "../utils";

export const Td = DoubleTag<{
  colspan?: number;
  headers?: string;
  rowspan?: number;
}>("td");
