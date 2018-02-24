function aggregate(arr) {
    arr.map(Number)
    function sumArr(arr) {
        return arr.reduce((a, b) => a + b)
    }
    function minArr(arr) {
        return arr.reduce((a, b) => Math.min(a, b))
    }
    function maxArr(arr) {
        return arr.reduce((a, b) => Math.max(a, b))
    }
    function productArr(arr) {
        return arr.reduce((a, b) => a * b)
    }
    function joinArr(arr) {
        return arr.reduce((a, b) => '' + a + b)
    }

    console.log(`Sum = ${sumArr(arr)}`)
    console.log(`Min = ${minArr(arr)}`)
    console.log(`Sum = ${maxArr(arr)}`)
    console.log(`Product = ${productArr(arr)}`)
    console.log(`Join= ${joinArr(arr)}`)

}
let arr2 = [1, 2, 4, 8]
aggregate(arr2)