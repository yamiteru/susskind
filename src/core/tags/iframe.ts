import doubleTag from "../utils/tag/doubleTag";
import { ReferrerPolicy, Sandbox } from "../types/common";

export const Iframe = doubleTag<{
  allow?: string;
  allowfullscreen?: boolean;
  allowpaymentrequest?: boolean;
  height?: number;
  loading?: string;
  name?: string;
  referrerpolicy?: ReferrerPolicy;
  sandbox?: Sandbox;
  src?: string;
  srcdoc?: string;
  width?: number;
}>("iframe");
