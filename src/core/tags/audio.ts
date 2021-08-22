import doubleTag from "../utils/tag/doubleTag";

export const Audio = doubleTag<{
  autoplay?: boolean;
  controls?: boolean;
  crossorigin?: string;
  disableremoteplayback?: string;
  loop?: boolean;
  muted?: boolean;
  preload?: string;
  src?: string;
}>("audio");
