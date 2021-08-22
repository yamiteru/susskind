import doubleTag from "../utils/tag/doubleTag";

export const Output = doubleTag<{
  for?: string;
  form?: string;
  name?: string;
}>("output");
