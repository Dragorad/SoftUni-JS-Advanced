let expect = require('chai').expect
let jsdom = require('jsdom-global')()
let $ = require('jquery')


function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}
describe('create list function tests', function () {
    let message = ''
    let returnList =createList.toString().split(', ')
    describe('addElement function', function () {
        message = 'addElement function did not work as expected'
        it('should add element', function () {

            createList.add('item')
            let length = returnList.length
            expect(returnList.length).to.be.equal(length + 1, message)

        })
        it('should add element to the end', function () {

            createList.add('item')
            let lastElement = returnList.pop()
            expect(lastElement).to.be.equal('item', message)

        })
    })
})