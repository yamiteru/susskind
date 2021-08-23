import { DoubleTag } from "../utils";

export const Output = DoubleTag<{
  for?: string;
  form?: string;
  name?: string;
}>("output");
