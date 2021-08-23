import { DoubleTag } from "../utils";

export const Fieldset = DoubleTag<{
  disabled?: boolean;
  form?: string;
  name?: string;
}>("fieldset");
