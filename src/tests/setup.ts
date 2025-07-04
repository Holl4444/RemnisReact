export function sum(a: number, b: number) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error(`Error: whole integers only please`);
    }
    return a + b;
}