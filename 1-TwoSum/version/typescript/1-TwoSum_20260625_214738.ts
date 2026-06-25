// Last updated: 6/25/2026, 9:47:38 PM
1function twoSum(nums: number[], target: number): number[] {
2    const map = new Map<number, number>();
3
4    for (let i = 0; i < nums.length; i++) {
5        const element = nums[i];
6        const remanent = target - element
7
8        if (map.has(remanent)) {
9            return [map.get(remanent), i]
10        }
11
12        map.set(element, i)
13    }
14
15    return [];
16};