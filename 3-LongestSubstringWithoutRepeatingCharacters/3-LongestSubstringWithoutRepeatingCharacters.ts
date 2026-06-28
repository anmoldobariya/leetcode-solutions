// Last updated: 6/28/2026, 7:41:02 PM
function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
    let currentStartPointer = 0;
    const charMap = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        if (charMap.has(currentChar)) {
            currentStartPointer = Math.max(currentStartPointer, charMap.get(currentChar) + 1);
        }

        charMap.set(currentChar, i);

        const windowLength = i - currentStartPointer + 1;
        if (windowLength > maxLength) maxLength = windowLength;
    }

    return maxLength;
};