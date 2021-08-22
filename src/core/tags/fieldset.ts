import doubleTag from "../utils/tag/doubleTag";

export const Fieldset = doubleTag<{
  disabled?: boolean;
  form?: string;
  name?: string;
}>("fieldset");
