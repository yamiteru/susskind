import { DoubleTag } from "../utils";

export const Audio = DoubleTag<{
  autoplay?: boolean;
  controls?: boolean;
  crossorigin?: string;
  disableremoteplayback?: string;
  loop?: boolean;
  muted?: boolean;
  preload?: string;
  src?: string;
}>("audio");
