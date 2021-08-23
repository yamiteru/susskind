import { H1, Title } from "../../core/tags";
import {HTMLDocument} from "../../core/utils";
import {IndexStoreMethods} from "./index.store";
import LinkList from "../components/LinkList";
import Greet from "../components/Greet";

const IndexPage = HTMLDocument<IndexStoreMethods>(
    Title()("Test - Homepage"),
)(
    Greet()(),
    LinkList()(),
);

export default IndexPage;
