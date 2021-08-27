const ops = (timeInNs: number) => Math
    .round(1 / (timeInNs / 1_000_000_000));

export default ops;