import doubleTag from "../utils/tag/doubleTag";
import { Controls } from "../types/common";

export const Video = doubleTag<{
  autoplay?: boolean;
  autopictureinpicture?: boolean;
  controls?: boolean;
  controlslist?: Controls;
  crossorigin?: string;
  height?: number;
  loop?: boolean;
  muted?: boolean;
  playsinline?: boolean;
  poster?: string;
  preload?: string;
  src?: string;
  width?: number;
}>("video");
