export type Props = Record<string, string | number | boolean>;

export type AnchorReferrerPolicy =
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";

export type AnchorTarget =
    | "_self"
    | "_blank"
    | "_parent"
    | "_top";