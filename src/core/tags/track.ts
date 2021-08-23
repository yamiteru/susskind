import { DoubleTag } from "../utils";
import { Kind } from "../types/common";

export const Track = DoubleTag<{
  default?: boolean;
  kind?: Kind;
  label?: string;
  src?: string;
  srclang?: string;
}>("track");
