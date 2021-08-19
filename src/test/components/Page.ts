import {Children} from "../../core/types/common";
import {body, head, html} from "../../core/tags";


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