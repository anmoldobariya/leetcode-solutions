// Last updated: 6/28/2026, 11:20:16 PM
1function search(nums: number[], target: number): number {
2    let left = 0;
3    let right = nums.length - 1;
4
5    while (left <= right) {
6        const midWay = left + Math.floor((right - left) / 2);
7        const value = nums[midWay];
8
9        if (value === target) {
10            return midWay;
11        }
12
13        if (value > target) {
14            right = midWay - 1;
15        } else {
16            left = midWay + 1;
17        }
18    }
19
20    return -1;
21};