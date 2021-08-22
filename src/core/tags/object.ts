import doubleTag from "../utils/tag/doubleTag";

export const Object = doubleTag<{
  data?: string;
  form?: string;
  height?: number;
  name?: string;
  type?: string;
  usemap?: string;
  width?: number;
}>("object");
