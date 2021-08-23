import { DoubleTag } from "../utils";

export const Ol = DoubleTag<{
  reversed?: boolean;
  start?: number;
  type?: string;
}>("ol");
