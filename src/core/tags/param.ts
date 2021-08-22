import doubleTag from "../utils/tag/doubleTag";

export const Param = doubleTag<{
  name?: string;
  value?: string;
}>("param");
