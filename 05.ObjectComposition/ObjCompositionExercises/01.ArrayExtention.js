(function arrayExtend() {

    Array.prototype.last = function last() {
        return this.pop()
    }
    Array.prototype.skip = function (n) {
        return this.splice(n)
    }
    Array.prototype.take = function (n) {
        return this.splice(0, n)

    }
    Array.prototype.sum = function sum() {
        return this.reduce(((a, b) => a + b))
    }
    Array.prototype.average = function () {
        return (this.length > 0 ? this.reduce(((a, b) => a + b)) / this.length
            : 0)
    }
}())

let textArr = [1, 2, 3]
console.log(textArr.skip(2))