import doubleTag from "../utils/tag/doubleTag";

export const Ol = doubleTag<{
  reversed?: boolean;
  start?: number;
  type?: string;
}>("ol");
