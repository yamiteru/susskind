const sum = (numbers: Uint8Array) => numbers
    .reduce((acc, n) => acc + n, 0);

export default sum;