import { DoubleTag } from "../utils";

export const Object = DoubleTag<{
  data?: string;
  form?: string;
  height?: number;
  name?: string;
  type?: string;
  usemap?: string;
  width?: number;
}>("object");
