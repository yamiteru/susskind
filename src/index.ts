type Props = Record<string, string | number | boolean>;

const propsToString = (props: Props) => Object.keys(props)
    .map((k) => `${k}="${props[k]}"`)
    .join(" ");

const singleTag = <T>(type: string) =>
    (props?: T & Props) =>
        () => `<${type} ${props ? propsToString(props): ""}/>`;

const doubleTag = <T>(type: string) =>
    (props?: T & Props) =>
        (...children: string[]) => children.length
            ? `<${type} ${props ? propsToString(props): ""}>${children.join("")}</${type}>`
            : singleTag(type)(props)();

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

// Benchmark
const sum = (arr: bigint[]) => arr.reduce((a,b) => a + b, BigInt(0));
const { hrtime } = process;

const list = 20;
const samples = 6000;
const data = [...Array(list)].map(() => ({
    user: '<strong style="color:red">糖饼</strong>',
    site: 'https://github.com/aui',
}));
const times: bigint[] = Array(samples);

for (let i = 0; i < samples; i++) {
    const start = hrtime.bigint();

    ul()(
        ...data.map(({ user, site }) =>
            li()(`User: ${user} / Web Site: ${site}`)
        )
    );

    times.push(hrtime.bigint() - start);
}

const avg = sum(times) / BigInt(samples);
const ops = BigInt(1000000 * 1000) / avg;
console.log(+avg.toString(), +ops.toString());