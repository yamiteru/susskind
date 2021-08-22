import doubleTag from "../utils/tag/doubleTag";
import { Kind } from "../types/common";

export const Track = doubleTag<{
  default?: boolean;
  kind?: Kind;
  label?: string;
  src?: string;
  srclang?: string;
}>("track");
