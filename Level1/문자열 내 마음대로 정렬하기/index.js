function solution(strings, n) {
    return strings.sort((a, b) => a[n] === b[n] ? (a > b) - (a < b) : (a[n] > b[n]) - (a[n] < b[n]));
}