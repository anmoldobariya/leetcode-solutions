// Last updated: 6/29/2026, 12:43:52 AM
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const midWay = left + Math.floor((right - left) / 2);
        const value = nums[midWay];

        if (value === target) {
            return midWay;
        }

        if (value > target) {
            right = midWay - 1;
        } else {
            left = midWay + 1;
        }
    }

    return -1;
};