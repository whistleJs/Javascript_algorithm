function solution(arr, c) {
    let result = [];
    
    for (let i = 0 ; i < c.length ; i++) {
        result.push(arr.slice(c[i][0] - 1, c[i][1]).sort((a, b) => a - b)[c[i][2] - 1])
    }
    
    return result;
}