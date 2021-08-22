import doubleTag from "../utils/tag/doubleTag";
import { ReferrerPolicy, AnchorTarget } from "../types/common";

export const Textarea = doubleTag<{
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
