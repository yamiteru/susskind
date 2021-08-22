import { Target } from "../types/common";
import doubleTag from "../utils/tag/doubleTag";

export const Button = doubleTag<{
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
