let breakfastRobot = (function () {
    let productsObj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0, flavour: 0
    }
    return function (inputString) {

        let inputSplit = inputString.split(' ')
        let command = inputSplit[0]
        if (command === 'restock') {
            let element = inputSplit[1]
            let quantity = Number(inputSplit[2])
            productsObj[element] += quantity
            return 'Success'
        } else if (command === 'report') {
            return `protein=${productsObj.protein} carbohydrate=${productsObj.carbohydrates} fat=${productsObj.fat} flavour=${productsObj.flavour}`
        } else if (command === 'prepare') {
            let mealName = inputSplit[1]
            let dozes = Number(inputSplit[2])
            let recepies = {
                apple: makeAndCheckMeal(dozes, ['carbohydrates', 1], ['flavour', 2]),
                coke:
                    makeAndCheckMeal(dozes, ['carbohydrates', 10], ['flavour', 20]),
                burger:
                    makeAndCheckMeal(dozes, ['carbohydrates', 5], ['flavour', 3], ['fat', 7]),
                omelet:
                    makeAndCheckMeal(dozes, ['protein', 5], ['flavour', 1]),
                cheverme:
                    makeAndCheckMeal(dozes, ['protein', 10], ['carbohydrates', 10], ['flavour', 10], ['fat', 10])

            }
            return recepies[mealName]()
            // switch (mealName) {
            //     case
            //         break
            //     case 'coke':
            //         makeAndCheckMeal(dozes, ['carbohydrates', 10], ['flavour', 20])
            //         break
            //     case 'burger':
            //         makeAndCheckMeal(dozes, ['carbohydrates', 5], ['flavour', 3], ['fat', 7])
            //         break
            //     case 'omelet':
            //         makeAndCheckMeal(dozes, ['protein', 5], ['flavour', 1])
            //         break
            //     case 'cheverme':
            //         makeAndCheckMeal(dozes, ['protein', 10], ['carbohydrates', 10], ['flavour', 10], ['fat', 10])
            //          break
            // }

            function makeAndCheckMeal(args) {
                let idx = 1
                let doses = arguments[0]
                let prod1 = arguments[idx][0]
                let qtity1 = arguments[idx][1]
                for (idx = 1; idx < arguments.length; idx++) {
                    if (productsObj[prod1] < qtity1 * doses) {
                        let missingProduct = prod1
                        let errorMessage = `Error: not enough ${missingProduct} in stock`
                        return errorMessage

                    }
                }
                for (let idx = 1; idx < arguments.length; idx++) {
                    productsObj[prod1] -= qtity1 * doses
                }
                return 'Success'
            }
        }

    }

}())

console.log(breakfastRobot('restock flavour 50'))
console.log(breakfastRobot('prepare coke 4'))
// breakfastRobot('restock flavour 50')
// breakfastRobot('prepare coke 4')
// breakfastRobot('prepare apple 1')
// breakfastRobot('restock fat 10')
// breakfastRobot('prepare apple 1')
// breakfastRobot('prepare burger 1')
// breakfastRobot('report')
