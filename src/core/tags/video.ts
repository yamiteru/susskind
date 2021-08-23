import { DoubleTag } from "../utils";
import { Controls } from "../types/common";

export const Video = DoubleTag<{
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
