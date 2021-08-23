import { Target } from "../types/common";
import { DoubleTag } from "../utils";

export const Button = DoubleTag<{
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: boolean;
  formtarget?: Target;
  name?: string;
  type?: string;
  value?: string;
}>("button");
