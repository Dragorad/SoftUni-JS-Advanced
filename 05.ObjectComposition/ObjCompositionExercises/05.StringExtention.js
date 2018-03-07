(function madeStringExtention() {
    let proto = String.prototype
    proto.ensureStart
        = function (str) {
        return this.indexOf(str) != 0
            ? str + this : this
    }
    proto.ensureEnd = function (str) {
        return this.endsWith(str)
            ? this : this + str
    }
    proto.isEmpty = function () {
        return this.length == 0
            ? true : false
    }
    proto.truncate = function (n) {
        let len = this.length
        if (len <= n) {
            return this
        }


        let str = this
        let replString = '---'
        while (len > n) {
            let splitThis = str.split(' ')
            if (splitThis.length < 2) {
                if (n < 4) {
                    return '.'.repeat(n)
                }
                else {
                    return '' + str.substr(0, (n - 3)) + replString
                }
            }
            splitThis.shift()
            str = splitThis.join(' ') + replString
            len = str.length
        }

        return str
    }
    proto.__proto__.format = function format(string, params) {
        let paramSpit = format.arguments
            for (let i = 1; i <= paramSpit.length-1; i++) {
                let newSubstr = paramSpit[i]
                let toReplace = `{${i-1}}`
                string = string.replace(toReplace, newSubstr)
            }
        return string
    }
}())
let str = 'my string'
str = str.ensureStart('my')
str = str.ensureStart('hello ')
str = str.truncate(16)
str = str.truncate(14)
str = str.truncate(8)
str = str.truncate(4)
str = str.truncate(2)
str = String.format('The {0} {1} fox',
    'quick', 'brown')
str = String.format('jumps {0} {1}',
    'dog')
