export type Data = {
    horizontal: any[];
    vertical: any[];
};

const data: Data = {
    horizontal: [...Array(1000)].map((_, i) => i),
    vertical: [...Array(1000)].map((_, i) => i),
};

export default data;