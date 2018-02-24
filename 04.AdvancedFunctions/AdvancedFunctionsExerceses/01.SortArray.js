function sortArr(arr, str) {
    arr.map(Number)
    switch (str){
        case 'asc':
            arr.sort((a,b)=> a - b)
            break
        case 'desc':
            arr.sort((a,b)=> b - a)
            break
    }
    return arr
}


console.log(sortArr([14, 7, 17, 6, 8], 'desc'))