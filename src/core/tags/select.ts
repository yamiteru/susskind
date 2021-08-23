import { DoubleTag } from "../utils";

export const Select = DoubleTag<{
  autocomplete?: boolean;
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  size?: number;
}>("select");
