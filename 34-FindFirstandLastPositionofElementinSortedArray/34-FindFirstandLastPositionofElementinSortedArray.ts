// Last updated: 6/29/2026, 9:55:11 PM
1function searchRange(nums: number[], target: number): number[] {
2    const findIndex = (checkLeft: boolean): number => {
3        let left = 0;
4        let right = nums.length - 1;
5        let result = -1;
6
7        while (left <= right) {
8            const mid = left + Math.floor((right - left) / 2);
9
10            if (nums[mid] === target) {
11                result = mid;
12
13                if (checkLeft) {
14                    right = mid - 1;
15                } else {
16                    left = mid + 1;
17                }
18
19            } else if (nums[mid] < target) {
20                left = mid + 1
21            } else {
22                right = mid - 1;
23            }
24        }
25
26        return result;
27    }
28
29    return [findIndex(true), findIndex(false)]
30};