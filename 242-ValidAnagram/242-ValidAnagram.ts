// Last updated: 6/28/2026, 8:50:50 PM
1function isAnagram(s: string, t: string): boolean {
2    if (s.length !== t.length) return false;
3
4    const counts = new Array(26).fill(0);
5
6    for (let i = 0; i < s.length; i++) {
7        counts[s.charCodeAt(i) - 97]++;
8    }
9
10    for (let i = 0; i < t.length; i++) {
11        counts[t.charCodeAt(i) - 97]--;
12    }
13
14    return counts.every(c => c === 0);
15};