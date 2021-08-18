import {Component} from "../../core/types";
import {a, h1, li, title, ul} from "../../core";
import {IndexProps} from "./index.data";
import Page from "../components/Page";

const IndexPage: Component<IndexProps> = ({ name, links }) =>
    Page(
        title()("Test - Homepage")
    )(
        h1()(`Hello ${name}!`),
        ul()(
            ...links.map(([title, link]) =>
                li()(
                    a({ href: link })(title)
                )
            )
        )
    );

export default IndexPage;