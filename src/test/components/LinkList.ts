import {Component} from "../../core/utils";
import {IndexStoreMethods} from "../pages/index.store";
import {A, Div, Li, Ul} from "../../core/tags";
import {For, Show} from "../../core/flow";

const LinkList = Component<IndexStoreMethods>((s) =>
    Ul()(
        For(s.links())(([title, link], i) =>
            Li()(
                A({ href: link })(title),
                Show(() => (i + 1) % 2 == 0)(
                    Div()("EVEN")
                )
            )
        )
    )
);

export default LinkList;