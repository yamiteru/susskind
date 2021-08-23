import {IndexStoreMethods} from "../views/index.store";
import {H1} from "../../core/tags";
import {Match, Switch} from "../../core/flow";
import {Component} from "../../core/types/common";

const Greet: Component<IndexStoreMethods> = (s) => () => (
    H1()(
        Switch(
            Match(() => s.lowerCaseName === null)("Uncloak yourself!"),
            Match(() => s.lowerCaseName === "yamiteru")("Welcome back master."),
            Match(() => s.lowerCaseName === "hacker")("Noo please spare me!")
        )(`Hello ${s.lowerCaseName}`)
    )
);

export default Greet;