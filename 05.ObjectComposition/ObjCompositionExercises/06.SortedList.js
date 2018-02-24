function makeSortedList() {
    let arrSize = 0
    let arrIn = this.internalArray
    let internalArray = []
    return {
        get internalArray() {
            return internalArray
        },

        add: function (elem) {
            internalArray.push(elem)
            internalArray.sort((a, b) => a - b)
            arrSize++

        },
        remove: function (idx) {
            if (idx >= 0 && idx < internalArray.length) {
                internalArray.splice(idx, 1)
                arrSize--
            }

        },
        get: function (idx) {
            return internalArray[idx]

        },
        get size() {
            return arrSize
        }

    }
}

let arr = makeSortedList()
arr.remove(0)
console.log(arr.size)
arr.add(5)
console.log(arr.size)
arr.add(-12)
arr.add(50)
arr.remove(1)
arr.size
console.log(arr.internalArray.toString())
arr.remove(0)
console.log(arr.internalArray.toString())
console.log(arr.size)
arr.remove(3)