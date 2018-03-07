let breakfastRobot = ()=> {
    let productsObj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0, flavour: 0
    }
    let recepiesObj = {
        apple: {carbohydrates: 1, flavour: 2,},
        coke: {carbohydrates: 10, flavour: 20},
        burger: {carbohydrates: 5, flavour: 3, fat: 7},
        omelet: {protein: 5, flavour: 1},
        cheverme: {protein: 10, carbohydrates: 10, flavour: 10, fat: 10}
    }
    return function proceed (inputString) {
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
            for (let product of recepiesObj[mealName]) {
                let quantity = recepiesObj[mealName][product] * dozes
                if (productsObj[product] < quantity) {
                    return `Error: not enough ${product} in stock`
                }
            }
            for (let product of recepiesObj[mealName]) {
                let quantity = recepiesObj[mealName][product] * doses
                productsObj[product] -= quantity
                return

            }
        }
    }

}

function result(){
    let ingerdients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function(str){
        if(!str) return;
        let params = str.split(' ');
        let cmd = params[0];

        let commands = {
            restock: function(){
                if(params.length<2) return;
                let product = params[1];
                let quantity = Number(params[2]);
                ingerdients[product] += quantity;
                return `Success`;
            },
            prepare: function(){
                if(params.length<2) return;
                let product = params[1];
                let quantity = Number(params[2]);
                let meals = {
                    apple: {carbohydrate: 1,flavour: 2},
                    coke: {carbohydrate: 10,flavour: 20},
                    burger: {carbohydrate: 5,fat: 7,flavour: 3},
                    omelet: {protein: 5,fat: 1,flavour: 1},
                    cheverme: { protein: 10,carbohydrate: 10,fat: 10,flavour: 10}
                };

                let mealToPrepare = meals[product];
                if(!mealToPrepare) return;
                let keys = Object.keys(mealToPrepare);
                let isThereEnoughEng = true;

                for (let k of keys) {
                    let needed = mealToPrepare[k] * quantity;
                    let has = ingerdients[k];
                    if(needed > has){
                        isThereEnoughEng = false;
                        return `Error: not enough ${k} in stock`;
                    }
                }

                if(isThereEnoughEng){
                    for (let k of keys) {
                        let needed = mealToPrepare[k] * quantity;
                        ingerdients[k] -= needed;
                    }

                    return `Success`;
                }

            },
            report: function(){
                return `protein=${ingerdients.protein} carbohydrate=${ingerdients.carbohydrate} fat=${ingerdients.fat} flavour=${ingerdients.flavour}`;
            }
        };

        return commands[cmd]();
    }
}
result('restock flavour 50')
console.log(result('restock flavour 50'))
console.log(result('prepare coke 4'))