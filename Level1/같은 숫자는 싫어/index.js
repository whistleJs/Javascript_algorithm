function solution(arr)
{
    let result = [arr[0]];
    let tmp = arr[0];
    
    for (let i = 1 ; i < arr.length ; i++) {
        if (tmp != arr[i]) {
            result.push(arr[i]);
            tmp = arr[i];
        }
    }
    
    return result;
}