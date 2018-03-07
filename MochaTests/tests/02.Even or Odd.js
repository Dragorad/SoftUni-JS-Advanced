let expect = require('chai').expect


function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


describe('isOddOrEven works correctly', function () {
    let message = 'isOddOrEven doesn\'t work as expected'
    it('should return undefined with non NaN input', function () {
        let result = isOddOrEven(NaN)
        expect(result).to.be.equal(undefined, message)
    })
    it('should return undefined with number input', function () {
        let result = isOddOrEven(12)
        expect(result).to.be.equal(undefined, message)
    })
    it('should return undefined with object input', function () {
        let result = isOddOrEven({})
        expect(result).to.be.equal(undefined, message)
    })
    it('should return even with even length input`', function () {
        let result = isOddOrEven('sase')
        expect(result).to.be.equal('even', message)
    })
    it('should return odd with odd length input`', function () {
        let result = isOddOrEven('sas')
        expect(result).to.be.equal('odd', message)
    })
})