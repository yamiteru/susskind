const median = (numbers: number[]) =>  {
    const middle = (numbers.length + 1) / 2;
    const sorted = numbers.sort((a, b) => a - b);
    const isEven = sorted.length % 2 === 0;
    return isEven
        ? (sorted[middle - 1.5] + sorted[middle - 0.5]) / 2
        : sorted[middle - 1];
};

export default median;