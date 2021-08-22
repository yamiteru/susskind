import doubleTag from "../utils/tag/doubleTag";

export const Optgroup = doubleTag<{
  diabled?: boolean;
  label?: string;
}>("optgroup");
