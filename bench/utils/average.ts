import sum from "./sum";

const average = (numbers: Uint8Array) => sum(numbers) / numbers.length;

export default average;