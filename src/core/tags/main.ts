import { DoubleTag } from "../utils";

export const Main = DoubleTag<{
  charset?: string;
  content?: string;
  name?: string;
}>("main");
