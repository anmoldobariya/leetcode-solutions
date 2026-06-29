// Last updated: 6/29/2026, 10:32:17 PM
class MinStack {
    private main: number[];
    private min: number[];

    constructor() {
        this.main = [];
        this.min = [];
    }

    push(value: number): void {
        this.main.push(value);

        if (!this.min.length || value <= this.min[this.min.length - 1]) {
            this.min.push(value);
        }
    }

    pop(): void {
        const value = this.main.pop();

        if (value === this.min[this.min.length - 1]) {
            this.min.pop();
        }
    }

    top(): number {
        return this.main[this.main.length - 1];
    }

    getMin(): number {
        return this.min[this.min.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */