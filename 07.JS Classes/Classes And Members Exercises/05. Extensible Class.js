let Extensible = (function () {
    let idNum = 0

    return class Extensible {
        constructor(idNum) {
            this.id = idNum++
        }

        extend(template) {

            for (let key in template) {
                let element = template[key]

                if (typeof element === 'function') {
                    Extensible.prototype[key] = element
                } else {
                    this[key] = element
                }
            }

        }
    }
}())

let obj1 = new Extensible()
let obj2 = new Extensible()
let obj3 = new Extensible()
console.log(obj1.id)
console.log(obj2.id)
console.log(obj3.id)
