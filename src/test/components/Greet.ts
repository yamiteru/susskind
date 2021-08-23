import {Component} from "../../core/utils";
import {IndexStoreMethods} from "../pages/index.store";
import {H1} from "../../core/tags";
import {Match, Switch} from "../../core/flow";

const Greet = Component<IndexStoreMethods>((s) => {
    const name = s.lowerCaseName();

    return (
        H1()(
            Switch(
                Match(() => name === null)("Welcome unknown"),
                Match(() => name === "yamiteru")("Welcome back master."),
                Match(() => name === "hacker")("Noo please spare me!")
            )(`Hello ${name}!`)
        )
    );
});

export default Greet;