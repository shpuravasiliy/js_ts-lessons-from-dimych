export const sum = (a: number, b: number) => a + b;
export const mult = (a: number, b: number) => a * b;

export const splitIntoWords = (sentense: string) => sentense.toLowerCase().replace(/[^A-Za-z\d_ ]/gi, '').split(' ').filter(t => t.length);

