// Last updated: 8/4/2026, 8:14:10 PM
1function gcdOfStrings(str1: string, str2: string): string {
2    if (str1 + str2 !== str2 + str1) return ""
3
4    return gcd(str1, str2)
5};
6
7function gcd(str1: string, str2: string) {
8    if (str1 === str2) return str1
9
10    const [smallStr, bigStr] = str1.length < str2.length ? [str1, str2] : [str2, str1];
11
12    let currentCheck = '';
13    for (let i = smallStr.length; i < bigStr.length; i++) {
14        currentCheck += bigStr[i]
15    }
16
17    return gcd(currentCheck, smallStr)
18}