let expect = require('chai').expect
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined
        }
        return num + 5
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined
        }
        return num - 10
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined
        }
        return num1 + num2
    }
}

describe('isAddFiveWorks', function () {
    it('return Num + 5 with positive number', function () {
        let result = mathEnforcer.addFive(6)
        expect(result).to.be.equal(11, 'Add five function did not work correctly')
    })
    it('return Num + 5 with negative number', function () {
        let result = mathEnforcer.addFive(-6)
        expect(result).to.be.equal(-1, 'Add five function did not work correctly')

    })

    it('return Num + 5 with string', function () {
        let result = mathEnforcer.addFive('string')
        expect(result).to.be.undefined
    })

    it('return Num + 5 with floating point number', function () {
        let result = mathEnforcer.addFive(-6.4543)
        expect(result).to.be.closeTo(-1.45, 0.01, 'Add five function did not work correctly')

    })
})
describe('isSubtractTenWorks', function () {
    let message = 'Subtract Ten function did not work correctly'
    it('return Num -10 with positive number', function () {
        let result = mathEnforcer.subtractTen(6)

        expect(result).to.be.equal(-4,message )
    })
    it('return Num -10 with negative number', function () {
        let result = mathEnforcer.subtractTen(-6)
        expect(result).to.be.equal(-16, message)

    })

    it('return Num -10 with string', function () {
        let result = mathEnforcer.subtractTen('string')
        expect(result).to.be.equal(undefined, message)
    })

    it('return Num -10 with floating point number', function () {
        let result = mathEnforcer.subtractTen(-6.4543)
        expect(result).to.be.closeTo(-16.45, 0.01, 'Add five function did not work correctly')

    })
})
describe('is sum works',function () {
   let message = 'Sum function did not work correctly'
    it('should return undefined if first argument is not num', function () {
        expect(mathEnforcer.sum('d', 12)).to.be.equal(undefined, message)

    })
    it('should return undefined if second argument is not num', function () {
        expect(mathEnforcer.sum(12, 'd')).to.be.equal(undefined, message)

    })
    it('should return sum with positive numbers', function () {
        expect(mathEnforcer.sum(13.32321, 35)).to.be.equal(48.32321,  message)
    })
    it('should return sum with negative numbers', function () {
        expect(mathEnforcer.sum(-23, -35)).to.be.equal(-58,  message)
    })
    it('should return sum with floating point numbers', function () {
        expect(mathEnforcer.sum(-23.05, -35.10)).to.be.closeTo(-58.15, 0.01,  message)
    })
})