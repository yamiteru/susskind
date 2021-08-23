import { DoubleTag } from "../utils";
import { ReferrerPolicy, Sandbox } from "../types/common";

export const Iframe = DoubleTag<{
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
