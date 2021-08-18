export type Object<T = any> = Record<string, T>;

export type Props = Object<string | number | boolean>;

export type Children = string[];

export type Component<T extends Object> = (
  props: T & Partial<Props>
) => (...children: Children) => string;

export type ReferrerPolicy =
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

export type Target = "_self" | "_blank" | "_parent" | "_top";
