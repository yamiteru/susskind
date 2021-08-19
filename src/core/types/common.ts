import {HTMLAttributes} from "./HTMLAttributes";
import {AriaAttributes} from "./AriaAttributes";

export type Booleanish = boolean | 'true' | 'false';

export type Object<K extends string = string, V = any> = Record<K, V>;

export type GeneralProps = Object<`data-${string}`, string | number | boolean>;

export type Props = HTMLAttributes & AriaAttributes & GeneralProps;

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

export type As =
    | "audio"
    | "document"
    | "embed"
    | "fetch"
    | "font"
    | "image"
    | "object"
    | "script"
    | "style"
    | "track"
    | "video"
    | "worker";