function makePersonalChart(name, age, weight, height) {
    let bmiNum = weight / Math.pow((height / 100), 2)
    let statusStr
    if (bmiNum < 18.5) {
        statusStr = 'underweight'// for BMI less than 18.5;}
    }
    if (bmiNum >= 18.5 && bmiNum < 25) {
        statusStr = 'normal'
    }
    if (bmiNum >= 25 && bmiNum < 30) {
        statusStr = 'overweight'
    }
    if (bmiNum >= 30) {
        statusStr = 'obese'
    }

    let personalChart = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(bmiNum),
        status: statusStr
    }
    if (statusStr === 'obese'){
        personalChart['recommendation'] = 'admission required'
    }
    return personalChart
}

console.log(makePersonalChart('dr', 53, 99, 176))
