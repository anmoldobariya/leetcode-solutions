// Last updated: 6/25/2026, 9:25:42 PM
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const remanent = target - element

        if (map.has(remanent)) {
            return [map.get(remanent), i]
        }

        map.set(element, i)
    }
};