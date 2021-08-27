import {Data} from "../data";
import {Div, Li, Ul} from "../../src/core/tags";
import {For} from "../../src/core/flow";

const susskind = ({ horizontal, vertical }: Data) => {
    return Div({ id: "root", className: "app" }, [
        For(horizontal, (_, i) =>
            Ul({ id: `list-${i}`, className: "list" }, [
                For(vertical, (_, j) =>
                    Li({ id: `list-${i}-item-${j}`, className: "item" }, [
                        `Item ${j} inside list ${i}`
                    ])
                )
            ])
        )
    ]);
};

export default susskind;