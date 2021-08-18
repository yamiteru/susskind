import {App} from "uWebSockets.js";
import {a, body, h1, head, html, li, title, ul} from "../core";
import startApp from "./utils/startApp";
import {Component} from "../core/types";
import {Data} from "./types";

type Props = {
    name: string;
    links: [title: string, link: string][];
};

const IndexData: Data<Props> = async () => ({
    name: "Yamiteru",
    links: [
        ["Susskind", "https://github.com/the-yamiteru/susskind"],
        ["Stoic", "https://github.com/the-yamiteru/stoic"],
        ["uWebSockets.js", "https://github.com/uNetworking/uWebSockets.js"],
    ],
});

const IndexPage: Component<Props> = ({ name, links }) => () => html()(
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

startApp(App())({
    "/": {
        data: IndexData,
        page: IndexPage
    }
});