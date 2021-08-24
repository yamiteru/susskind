import { H1, Title } from "../../core/tags";
import {HTMLDocument} from "../../core/utils";
import {IndexStoreMethods} from "./index.store";
import LinkList from "../components/LinkList";
import Greet from "../components/Greet";
import {View} from "../../core/types/common";

const IndexView: View<IndexStoreMethods> = (s) => HTMLDocument([
    Title(null, ["Test - Homepage"])
], [
    Greet(s),
    LinkList(s),
]);

export default IndexView;
