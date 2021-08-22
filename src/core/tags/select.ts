import doubleTag from "../utils/tag/doubleTag";

export const Select = doubleTag<{
  autocomplete?: boolean;
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  size?: number;
}>("select");
