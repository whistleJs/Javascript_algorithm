function solution(s){
    return /^[0-9]{4}$/.test(s) ? true : /^[0-9]{6}$/.test(s) ? true : false;
}