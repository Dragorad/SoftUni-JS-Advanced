let solve = (function () {
    let productsObj = {
        protein: 0,
        carbohydrates: 0,
        fat: 0, flavour: 0
    }
    return (function (commandString) {
        let commandSplit = commandString.split(' ')
        let commands = {
            restock: (microelement, quantity) => {
                productsObj[microelement] += Number(quantity)
                console.log('Success')
            },
            prepare: (meal, dozes) => {
                //let mealName = commandSplit[1]
                dozes = Number(commandSplit[2])
                switch (meal) {
                    case 'Apple':
                        makeAndCheckMeal(dozes, ['carbohydrates', 1], ['flavour', 2])
                        break
                    case 'coke':
                        makeAndCheckMeal(dozes, ['carbohydrates', 10], ['flavour', 20])
                        break
                    case 'Burger':
                        makeAndCheckMeal(dozes, ['carbohydrates', 5], ['flavour', 3], ['fat', 7])
                        break
                    case 'Omelet':
                        makeAndCheckMeal(dozes, ['protein', 5], ['flavour', 1])
                        break
                    case 'Cheverme':
                        makeAndCheckMeal(dozes, ['protein', 10], ['carbohydrates', 10], ['flavour', 10], ['fat', 10])
                        break
                }

            },

            report: () => {
                let report = []
                for (let key of Object.keys(productsObj)) {
                    report.push(`${key} = ${productsObj[key]}`)
                }
                console.log(report.join(' '))
            }
        }

        let command = commandSplit[0]
        switch (command) {
            case 'restock':
                commands['restock'](commandSplit[1], commandSplit[2])
                return
            case'prepare':
                commands['prepare'](commandSplit[1], commandSplit[2])
                return
            case 'report':
                commands['report']()
                return
        }
        //
        // return commands['comand']()

        function makeAndCheckMeal(args) {

            let doses = arguments[0]
            for (let idx = 1; idx < arguments.length; idx++) {
                let prod1 = arguments[idx][0]
                let qtity1 = arguments[idx][1]

                if (productsObj[prod1] < qtity1 * doses) {
                    let missingProduct = prod1
                    let errorMessage = `Error: not enough ${missingProduct} in stock`
                    console.log(errorMessage)
                    return
                }
            }
            for (let idx = 1; idx < arguments.length; idx++) {
                let doses = arguments[0]
                let prod1 = arguments[idx][0]
                let qtity1 = arguments[idx][1]

                productsObj[prod1] -= qtity1 * doses
            }
            console.log('Success')
        }

    }())

}())

let manager = solve()
solve('restock carbohydrate 10')
manager('restock flavour 10')
manager('prepare apple 1')
manager('restock fat 10')
manager('prepare burger 1')
manager('report')
