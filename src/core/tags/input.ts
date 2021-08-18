import doubleTag from "../utils/doubleTag";
import { Target } from "../types";

export const input = doubleTag<{
  accept?: string;
  alt?: string;
  autofocus?: boolean;
  capture?: string;
  checked?: boolean;
  dirname?: string;
  disabled?: boolean;
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: boolean;
  formtarget?: Target;
  height?: number;
  id?: string;
  inputmode?: string;
  list?: string;
  max?: string;
  maxlength?: number;
  min?: string;
  minlength?: number;
  multiple?: boolean;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: string;
  src?: string;
  step?: number;
  title?: string;
  type?: string;
  value?: string;
  width?: number;
}>("input");