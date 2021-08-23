import { DoubleTag } from "../utils";

export const Option = DoubleTag<{
  disabled?: boolean;
  label?: string;
  selected?: boolean;
  value?: string;
}>("option");
