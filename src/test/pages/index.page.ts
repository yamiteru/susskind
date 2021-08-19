import {IndexProps} from "./index.data";
import Page from "../components/Page";
import {a, div, h1, li, title, ul} from "../../core/tags";
import {For, Match, Show, Switch} from "../../core/flow";
import {Component} from "../../core/types/common";

const IndexPage: Component<IndexProps> = ({ name, links }) =>
    Page(
        title()("Test - Homepage")
    )(
        h1()(
            Switch(
                Match(() => name === "Yamiteru")(
                    "Welcome back master."
                ),
                Match(() => name === "Hacker")(
                    "Noo please spare me!"
                )
            )(
                `Hello ${name}!`
            )
        ),
        ul()(
            For(links)(([title, link], i) =>
                li()(
                    a({ href: link })(title),
                    Show(() => (i + 1) % 2 == 0)(
                        div()("EVEN")
                    )
                )
            )
        )
    );

export default IndexPage;