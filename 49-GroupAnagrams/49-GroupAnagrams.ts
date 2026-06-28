// Last updated: 6/28/2026, 10:50:45 PM
1function groupAnagrams(strs: string[]): string[][] {
2    const groups = new Map<string, string[]>();
3
4
5    for (const s of strs) {
6        const counts = new Array(26).fill(0);
7
8        for (let i = 0; i < s.length; i++) {
9            counts[s.charCodeAt(i) - 97]++;
10        }
11
12        const key = counts.join(':');
13        if (groups.has(key)) {
14            groups.get(key).push(s);
15        } else {
16            groups.set(key, [s]);
17        }
18    }
19
20    return Array.from(groups.values());
21};