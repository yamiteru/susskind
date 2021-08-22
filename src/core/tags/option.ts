import doubleTag from "../utils/tag/doubleTag";

export const Option = doubleTag<{
  disabled?: boolean;
  label?: string;
  selected?: boolean;
  value?: string;
}>("option");
