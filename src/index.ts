import {App, HttpRequest} from "uWebSockets.js";

type Props = Record<string, string | number | boolean>;

const propsToString = (props?: Props) => {
    if(props) {
        let res: string = "";
        for (const k in props) res += ` ${k}="${props[k]}"`;
        return res;
    }

    else return "";
};

const singleTag = <T>(type: string) =>
    (props?: T & Props) =>
        () => `<${type}${propsToString(props)}/>`;

const doubleTag = <T>(type: string) =>
    (props?: T & Props) =>
        (...children: string[]) => {
            const length = children.length;

            if(length) {
                let content = "";
                for(let i = 0; i < length; i++) content += children[i];
                return `<${type}${propsToString(props)}>${content}</${type}>`
            }

            else return singleTag(type)(props)();
        };

const html = doubleTag("html");
const head = doubleTag("head");
const title = doubleTag("title");
const body = doubleTag("body");
const div = doubleTag("div");
const span = doubleTag("span");
const ul = doubleTag("ul");
const li = doubleTag("li");
const h1 = doubleTag("h1");
const h2 = doubleTag("h2");
const h3 = doubleTag("h3");
const h4 = doubleTag("h4");
const h5 = doubleTag("h5");
const h6 = doubleTag("h6");
const a = doubleTag("a");

type Link = [title: string, link: string];

const links: Link[] = [
    ["Susskind", "https://github.com/the-yamiteru/susskind"],
    ["Stoic", "https://github.com/the-yamiteru/stoic"],
    ["uWebSockets.js", "https://github.com/uNetworking/uWebSockets.js"],
];

type Document = (req: HttpRequest) => string;

const document: Document = () => html()(
    head()(
        title()("Test - Homepage"),
    ),
    body()(
        h1()("Hello World!"),
        ul()(
            ...links.map(([title, link]) =>
                li()(
                    a({ href: link })(title)
                )
            )
        )
    ),
);

App()
    .get("/*", (res, req) => res
        .writeStatus("200 OK")
        .end(document(req)))
    .listen(3000, (soc) =>
        soc && console.log("Listening to port 3000")
    );