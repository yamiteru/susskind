import { IndexProps } from "./index.data";
import Page from "../components/Page";
import { A, Div, H1, Li, Title, Ul } from "../../core/tags";
import { For, Match, Show, Switch } from "../../core/flow";
import { Component } from "../../core/types/common";

const IndexPage: Component<IndexProps> = ({ name, links }) =>
  Page(Title()("Test - Homepage"))(
    H1()(
      Switch(
        Match(() => name === "Yamiteru")("Welcome back master."),
        Match(() => name === "Hacker")("Noo please spare me!")
      )(`Hello ${name}!`)
    ),
    Ul()(
      For(links)(([title, link], i) =>
        Li()(
          A({ href: link })(title),
          Show(() => (i + 1) % 2 == 0)(Div()("EVEN"))
        )
      )
    )
  );

export default IndexPage;
