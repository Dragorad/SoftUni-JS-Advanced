function carRecepy(clientOrder) {
    let smallEngine = {power: 90, volume: 1800},
        normalEngine = {power: 120, volume: 2400},
        monsterEngine = {power: 200, volume: 3500}
    let correctOrder = {model: '', engine: {}, carriage: {}, wheels: []}


    if (clientOrder['power'] <= 90) {
        correctOrder['engine'] = smallEngine
    } else {
        if (clientOrder.power >= 90 && clientOrder.power < 120) {
            correctOrder['engine'] = normalEngine
        } else {
            correctOrder['engine'] = monsterEngine
        }
    }

    correctOrder.carriage = {
        type: `${clientOrder['carriage']}`,
        color: `${clientOrder['color']}`
    }

    let wheels = Number(clientOrder['wheelsize'])
    if (wheels % 2 == 0) {
        wheels -= 1
    }
    correctOrder.model = clientOrder.model
    correctOrder.wheels = [wheels, wheels, wheels, wheels]
    return correctOrder

}

let clientOrder = {
    model: 'Opel Vectra',
    power: 130,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
console.log(carRecepy(clientOrder))

