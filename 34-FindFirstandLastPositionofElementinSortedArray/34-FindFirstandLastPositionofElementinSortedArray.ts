// Last updated: 6/29/2026, 10:31:49 PM
1class MinStack {
2    private main: number[];
3    private min: number[];
4
5    constructor() {
6        this.main = [];
7        this.min = [];
8    }
9
10    push(value: number): void {
11        this.main.push(value);
12
13        if (!this.min.length || value <= this.min[this.min.length - 1]) {
14            this.min.push(value);
15        }
16    }
17
18    pop(): void {
19        const value = this.main.pop();
20
21        if (value === this.min[this.min.length - 1]) {
22            this.min.pop();
23        }
24    }
25
26    top(): number {
27        return this.main[this.main.length - 1];
28    }
29
30    getMin(): number {
31        return this.min[this.min.length - 1];
32    }
33}
34
35/**
36 * Your MinStack object will be instantiated and called as such:
37 * var obj = new MinStack()
38 * obj.push(value)
39 * obj.pop()
40 * var param_3 = obj.top()
41 * var param_4 = obj.getMin()
42 */