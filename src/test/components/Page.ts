import {Children} from "../../core/types";
import {body, head, html} from "../../core";

const Page = (...headChildren: Children) =>
    (...bodyChildren: Children) =>
        (...otherChildren: Children) =>
            html()(
                head()(...headChildren),
                body()(
                    ...bodyChildren,
                    ...otherChildren,
                ),
            );

export default Page;