let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
describe('lookupChar works correctly', function () {
    let message = 'lookupChar doesn\'t work as expected'
    it('should return undefined with non NaN input', function () {
        let result = lookupChar(NaN, 0)
        expect(result).to.be.equal(undefined, message)
    })
    it('should return undefined with number input', function () {
        let result = lookupChar(12, 0)
        expect(result).to.be.equal(undefined, message)
    })
    it('should return undefined with object input', function () {
        let result = lookupChar({}, 0)
        expect(result).to.be.equal(undefined, message)
    })
    it('should return undefined with non integer index input', function () {
        let result = lookupChar('string', 3.45)
        expect(result).to.be.equal(undefined, message)
    })
    it('should return undefined with non integer index input', function () {
        let result = lookupChar('string', 'spring')
        expect(result).to.be.equal(undefined, message)
    })
    describe('lookupChar returns undefined with out of range index', function () {
        message = 'lookupChar doesn\'t work as expected with out of range index'
        it('should return undefined with index <0 ', function () {
            let result = lookupChar('string', -3)
            expect(result).to.be.equal('Incorrect index', message)
        })
        it('should return undefined with index > string length ', function () {
            let result = lookupChar('string', 12)
            expect(result).to.be.equal('Incorrect index', message)
        })

        it('should return undefined with index = string length ', function () {
            let result = lookupChar('string', 6)
            expect(result).to.be.equal('Incorrect index', message)
        })
        it('should work correctly with  index  0 and valid string', function () {
            let result = lookupChar('string', 0)
            expect(result).to.be.equal('s', message)
        })
        it('should return undefined with index = string length ', function () {
            let result = lookupChar('string', 3)
            expect(result).to.be.equal('i', message)
        })
        it('should work correctly with valid index and valid string', function () {

        })
    })

})
