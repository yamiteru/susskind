import {Data} from "../data";
import {Div, Li, Ul} from "../../src/core/tags";
import {For} from "../../src/core/flow";

const susskind = (data: Data) => {
    const horizontals = [...Array(data.horizontal)];
    const verticals = [...Array(data.vertical)];

    return Div({ id: "root", className: "app" }, [
        For(horizontals, (_, i) =>
            Ul({ id: `list-${i}`, className: "list" }, [
                For(verticals, (_, j) =>
                    Li({ id: `list-${i}-item-${j}`, className: "item" }, [
                        `Item ${j} inside list ${i}`
                    ])
                )
            ])
        )
    ]);
};

export default susskind;