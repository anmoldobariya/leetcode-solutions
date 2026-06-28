// Last updated: 6/28/2026, 7:41:03 PM
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

    return [];
};