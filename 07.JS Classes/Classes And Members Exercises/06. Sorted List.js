class SortedList {

    constructor() {
        this.internalArray = []
        this.size = 0
    }

    add(elem) {
        this.internalArray.push(elem)
        this.internalArray.sort((a, b) => a - b)
        this.size++


    }

    remove(idx) {
        if (idx >= 0 && idx < this.internalArray.length) {
            this.internalArray.splice(idx, 1)
            this.size--
        }

    }

    get(idx) {
        return this.internalArray[idx]

    }


}

