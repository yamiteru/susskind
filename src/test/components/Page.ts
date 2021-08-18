import {Children} from "../../core/types";
import {body, head, html} from "../../core";

const Page = (...headChildren: Children) =>
    (...bodyChildren: Children) =>
        html()(
            head()(...headChildren),
            body()(...bodyChildren),
        );

export default Page;