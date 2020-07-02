function solution(p, c) {
    p.sort();
    c.sort();
    
    for (let i in p) {
        if (p[i] !== c[i]) {
            return p[i]
        }
    }
}