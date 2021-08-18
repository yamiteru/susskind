import {Component} from "../../core/types";
import {a, body, h1, head, html, li, title, ul} from "../../core";
import {IndexProps} from "./index.data";

const IndexPage: Component<IndexProps> = ({ name, links }) => () => html()(
    head()(
        title()("Test - Homepage"),
    ),
    body()(
        h1()(`Hello ${name}!`),
        ul()(
            ...links.map(([title, link]) =>
                li()(
                    a({ href: link })(title)
                )
            )
        )
    ),
);

export default IndexPage;