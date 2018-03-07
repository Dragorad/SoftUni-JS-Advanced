function argumentsInfo() {
    let argsObj = {}
    for (let arg of arguments) {
        let argType = typeof arg
        console.log(`${argType}: ${arg}`)
        if(!argsObj.hasOwnProperty(argType)){
            argsObj[argType]= 0
        }
        argsObj[argType]+=1
    }

    let sorted = Object.keys(argsObj).sort((a, b) => argsObj[b] - argsObj[a])

        for(let prop of sorted) {
        console.log(`${prop} = ${argsObj[prop]}`)
    }
}
argumentsInfo({ name: 'bob'}, 3.333, 9.999)
