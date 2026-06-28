// Last updated: 6/29/2026, 12:43:54 AM
function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false;

    const openingBrackets = new Set(['(', '{', '[']);
    const map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    const stack: string[] = [];

    for (const ch of s) {
        if (openingBrackets.has(ch)) {
            stack.push(ch)
        } else if (map.get(ch) === stack[stack.length - 1]) {
            stack.pop()
        } else {
            return false
        }
    }

    return stack.length === 0
};