function solution(arr, divisor) {
    return arr.filter(value => value % divisor == 0).length ? arr.filter(value => value % divisor == 0).sort((a, b) => a - b) : [-1];
}