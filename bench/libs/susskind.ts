import {Data} from "../data";
import {Div, Ul} from "../../src/core/tags";
import {For} from "../../src/core/flow";

const susskind = ({ horizontal }: Data) => {
    return Div(null, [
        For(horizontal, () =>
            Ul(null)
        )
    ]);
};

export default susskind;