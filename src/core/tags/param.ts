import { DoubleTag } from "../utils";

export const Param = DoubleTag<{
  name?: string;
  value?: string;
}>("param");
