let weight ,
    experience ,
    bloodAlcoholLevel ,
    handsShaking
let worker = {weight, experience, bloodAlcoholLevel, handsShaking}
worker ={ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }


function brandNewWorker(worker) {
    if(!worker.handsShaking){
        return worker
    }else {
        worker.bloodAlcoholLevel += worker.experience * worker.weight * 0.1
        worker.handsShaking = false
        return worker
    }
}
console.log(brandNewWorker(worker))