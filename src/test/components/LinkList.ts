import {IndexStoreMethods} from "../views/index.store";
import {A, Div, Li, Ul} from "../../core/tags";
import {For, Show} from "../../core/flow";
import {Component} from "../../core/types/common";

const LinkList: Component<IndexStoreMethods> = (s) => (
    Ul(null, [
        For(s.links, ([title, link], i) =>
            Li(null, [
                A({href: link}, [title]),
                Show(
                    () => (i + 1) % 2 == 0,
                    () => Div(null, ["EVEN"])
                )
            ])
        )
    ])
);

export default LinkList;