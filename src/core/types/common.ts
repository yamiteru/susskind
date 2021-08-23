import { HTMLAttributes } from "./HTMLAttributes";
import { AriaAttributes } from "./AriaAttributes";

export type Booleanish = boolean | "true" | "false";

export type Object<K extends string = string, V = any> = Record<K, V>;

export type GeneralProps = Object<`data-${string}`, string | number | boolean>;

export type Attributes = HTMLAttributes & AriaAttributes & GeneralProps;

export type Store<I extends Object, O extends StoreGetters> = (data: I) => O;

export type StoreGetters = {
    [k: string]: () => any;
};

export type View<S extends StoreGetters> = (store: S) => AnyDocument;

export type Child<S extends StoreGetters> = string | ((store: S) => string);

export type Children<S extends StoreGetters> = Child<S>[];

export type AnyDocument = {
    type: string;
    view: string;
};

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

export type Coords = "rect" | "circle" | "poly" | "default";

export type Kind =
  | "subtitles"
  | "captions"
  | "descriptions"
  | "chapters"
  | "metadata";

export type Controls = "nodownload" | "nofullscreen" | "noremoteplayback";

export type Sandbox =
  | "allow-downloads-without-user-activation"
  | "allow-downloads"
  | "allow-forms"
  | "allow-modals"
  | "allow-orientation-lock"
  | "allow-pointer-lock"
  | "allow-popups"
  | "allow-popups-to-escape-sandbox"
  | "allow-presentation"
  | "allow-same-origin"
  | "allow-scripts"
  | "allow-storage-access-by-user-activation"
  | "allow-top-navigation"
  | "allow-top-navigation-by-user-activation";
