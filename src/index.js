function wildcardMatching(s, p) {
    let dp = Array(s.length + 1).fill(0).map(() => Array(p.length + 1).fill(false));
    dp[0][0] = true;
    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
        }
    }
    return dp[s.length][p.length];
}

console.log(wildcardMatching("aa", "a")); // false
console.log(wildcardMatching("aa", "*")); // true
console.log(wildcardMatching("cb", "?a")); // false
console.log(wildcardMatching("adceb", "*a*b")); // true
console.log(wildcardMatching("acdcb", "a*c?b")); // false
