// Last updated: 6/28/2026, 8:03:47 PM
1function containsDuplicate(nums: number[]): boolean {
2    const set = new Set<number>();
3
4    for (const n of nums) {
5        if (set.has(n)) return true;
6        set.add(n);
7    }
8
9    return false
10};