let instance;

class Counter {
    value: number = 0;

    constructor() {
        if (instance) {
            throw new Error('You can only create one instance!');
        }
        instance = this;
    }

    increment() {
        this.value++;
    }
}

export default Object.freeze(new Counter())