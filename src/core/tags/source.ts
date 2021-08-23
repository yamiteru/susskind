import { DoubleTag } from "../utils";

export const Source = DoubleTag<{
  media?: string;
  sizes?: string;
  src?: string;
  srcset?: string;
  type?: string;
}>("source");
