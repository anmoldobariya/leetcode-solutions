// Last updated: 8/9/2026, 10:28:15 AM
function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return ""

    return gcd(str1, str2)
};

function gcd(str1: string, str2: string) {
    if (str1 === str2) return str1

    const [smallStr, bigStr] = str1.length < str2.length ? [str1, str2] : [str2, str1];

    let currentCheck = '';
    for (let i = smallStr.length; i < bigStr.length; i++) {
        currentCheck += bigStr[i]
    }

    return gcd(currentCheck, smallStr)
}