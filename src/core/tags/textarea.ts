import doubleTag from "../utils/doubleTag";
import { ReferrerPolicy, AnchorTarget } from "../types";

export const textarea = doubleTag<{
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
