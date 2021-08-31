export type Data = {
    horizontal: any[];
};

const scale = [
    1, 10, 100, 1000, 10000, 100000
];

const data: Data[] = scale.map((n) => ({
    horizontal: [...Array(n)].map((_, i) => i),
}));

export default data;