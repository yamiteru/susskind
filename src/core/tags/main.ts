import doubleTag from "../utils/tag/doubleTag";

export const Main = doubleTag<{
  charset?: string;
  content?: string;
  name?: string;
}>("main");
