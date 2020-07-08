function solution(s) {
    let tmp = Math.ceil(s.length / 2) - 1;
    
    return s.length % 2 == 0 ? s.slice(tmp, tmp + 2) : s.slice(tmp, tmp + 1);
}