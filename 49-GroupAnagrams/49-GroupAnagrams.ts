// Last updated: 6/28/2026, 11:06:05 PM
1function isValid(s: string): boolean {
2    if (s.length % 2 !== 0) return false;
3
4    const openingBrackets = new Set(['(', '{', '[']);
5    const map = new Map([
6        [')', '('],
7        ['}', '{'],
8        [']', '[']
9    ]);
10    const stack: string[] = [];
11
12    for (const ch of s) {
13        if (openingBrackets.has(ch)) {
14            stack.push(ch)
15        } else if (map.get(ch) === stack[stack.length - 1]) {
16            stack.pop()
17        } else {
18            return false
19        }
20    }
21
22    return stack.length === 0
23};