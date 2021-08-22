import doubleTag from "../utils/tag/doubleTag";

export const Source = doubleTag<{
  media?: string;
  sizes?: string;
  src?: string;
  srcset?: string;
  type?: string;
}>("source");
