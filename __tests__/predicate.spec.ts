import { Predicate } from "../src";

test("should be an empty array", () => {

    const arr: Array<number> = [];

    const isEmpty: Predicate<Array<number>> = new class extends Predicate<Array<number>> {
        matches(a: []): boolean {
            return a.length === 0;
        }
    };

    expect(isEmpty.matches(arr)).toBe(true);
});

