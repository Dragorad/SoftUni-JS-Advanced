
let expect = require('chai').expect

function sum(arr, startIdx, endIdx) {
    if(!Array.isArray(arr)){
        return NaN
    }
    startIdx < 0 ? startIdx = 0 : startIdx
    endIdx > arr.length-1 ? endIdx = arr.length -1 : endIdx
    let sum = 0;
    for (let i = startIdx; i <= endIdx; i++) {
        if(Number(arr[i])){
            sum += arr[i]
        }
        else {return NaN}

    }
    return sum;
}