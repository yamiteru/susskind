type Props = Record<string, string | number | boolean>;

const propsToString = (props: Props) => Object.keys(props)
    .map((k) => `${k}="${props[k]}"`)
    .join(" ");

const singleTag = <T>(type: string) =>
    (props?: T & Props) =>
        () => `<${type} ${props && propsToString(props)}/>`;

const doubleTag = <T>(type: string) =>
    (props?: T & Props) =>
        (...children: string[]) => children.length
            ? `<${type} ${props && propsToString(props)}>${children.join("")}</${type}>`
            : singleTag(type)(props)();

const div = doubleTag("div");
const span = doubleTag("span");
const h1 = doubleTag("h1");
const h2 = doubleTag("h2");
const h3 = doubleTag("h3");
const h4 = doubleTag("h4");
const h5 = doubleTag("h5");
const h6 = doubleTag("h6");

const test = div({ class: "article" })(
    div({ class: "background" })(),
    h1({ class: "title" })("Hello World!")
);

console.log(test);