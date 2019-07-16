export abstract class Predicate<T> {

    abstract matches(a: T): boolean;

    public and(other: Predicate<T>): Predicate<T> {
        const _ = this;
        return new class extends Predicate<T> {
            matches(a: T): boolean {
                return _.matches(a) && other.matches(a);
            }
        }
    }

    public or(other: Predicate<T>): Predicate<T> {
        const _ = this;
        return new class extends Predicate<T> {
            matches(a: T): boolean {
                return _.matches(a) || other.matches(a);
            }
        }
    }

    public negate(): Predicate<T> {
        const _ = this;
        return new class extends Predicate<T> {
            matches(a: T): boolean {
                return !_.matches(a);
            }
        }
    }

}
