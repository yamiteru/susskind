export type Object<K extends string = string, V = any> = Record<K, V>;

export type DataProp = `data-${string}`;

export type AriaProp = `aria-${string}`;

export type PropKey = AriaProp | DataProp;

export type PropValue = string | number | boolean;

export type GeneralProps = Object<PropKey, PropValue>;

export type SharedProps = {
    id?: string;
    class?: string;
};

export type Props = SharedProps & GeneralProps;

export type Children = string[];

export type Component<T extends Object> =
    (props: T & Partial<Props>) => (...children: Children) => string;

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