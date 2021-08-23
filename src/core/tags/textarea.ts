import { DoubleTag } from "../utils";
import { ReferrerPolicy, AnchorTarget } from "../types/common";

export const Textarea = DoubleTag<{
  autofocus?: boolean;
  cols?: number;
  disabled?: boolean;
  form?: string;
  maxlength?: number;
  minlength?: number;
  name?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}>("textarea");
