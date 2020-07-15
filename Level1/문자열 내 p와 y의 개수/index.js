function solution(s){
    return [...s].filter(c => c.toLowerCase() == 'p').length == [...s].filter(c => c.toLowerCase() == 'y').length
}