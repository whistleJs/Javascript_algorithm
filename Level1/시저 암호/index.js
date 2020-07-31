function solution(s, n) {
    return s.split('').map(x => x == ' ' ? ' ' : String.fromCharCode(x.toUpperCase().charCodeAt() >= 91 - n ? x.charCodeAt() + n - 26 : x.charCodeAt() + n)).join('')
}