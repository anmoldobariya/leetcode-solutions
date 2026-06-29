// Last updated: 6/29/2026, 10:32:18 PM
function searchRange(nums: number[], target: number): number[] {
    const findIndex = (checkLeft: boolean): number => {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (nums[mid] === target) {
                result = mid;

                if (checkLeft) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }

            } else if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    return [findIndex(true), findIndex(false)]
};