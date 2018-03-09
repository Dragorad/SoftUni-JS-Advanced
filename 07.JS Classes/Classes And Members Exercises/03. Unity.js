class Rat {
    constructor(name) {
        this.name = name
        this.unitedRats = []
    }

    unite(obj) {
        if (obj instanceof Rat) {
            this.unitedRats.push(obj)
        }
    }

    getRats() {
        return this.unitedRats
    }

    toString() {
        let printString = `${this.name}`


        for (let obj of this.unitedRats) {
            printString += `\n##${obj._name}`
        }
        return printString
    }
}

let test = new Rat("Pesho")
console.log(test.toString()) //Pesho
test.unite(new Rat("Gosho"))
test.unite(new Rat("Sasho"))
console.log(test.getRats())
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString())


