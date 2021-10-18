export const times = (n: number): number[] => Array.from(Array(n).keys());
export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
