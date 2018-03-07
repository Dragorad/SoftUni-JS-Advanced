let expect = require('chai').expect
let jsdom = require('jsdom-global')()
let $ = require('jquery')

function nuke(selector1, selector2) {
    if (selector1 === selector2) return
    $(selector1).filter(selector2).remove()
}

describe('nuke functionality', function () {

    beforeEach('init HTML', function () {

        document.body.innerHTML =
            `<div id="target">
                <div class="nested target">
                    <p>This is some text</p>
                </div>
                <div class="target">
                    <p>Empty div</p>
                </div>
                <div class="inside">
                    <span class="nested">Some more text</span>
                    <span class="target">Some more text</span>
                </div>
            </div>`
    })

    let message = ''
    describe('are there two input arguments', function () {
        it('should not delete element if the argument is one', function () {
            message = 'HTML changed'
            let selector1 = $('.target')
            let initialHTML = $('#target').html()
            nuke(selector1)
            let newHtml = $('#target').html()
            expect(initialHTML).to.be.equal(newHtml, message)
        })
    })
    describe('selectors are equal(does nothing)', function () {
        message = "HTML changed"
        it('are selectors different ', function () {
            let selector1 = $('#target')
            let selector2 = selector1
            let initialHTML = $('#target').html()
            nuke(selector1, selector2)

            expect(initialHTML).to.be.equal($('#target').html(), message)
        })
    })

    describe('selectors are not valid for document', function () {

        it('first argument is invalid(should not work)', function () {
            message = "HTML changed"
            let selector1 = $('.god')
            let selector2 = $('.inside')
            let initialHTML = $('#target').html()
            nuke(selector1, selector2)
            expect(initialHTML).to.be.equal($('#target').html(), message)
        })
        it('Second argument is invalid(should not work)', function () {
            message = "HTML changed"
            let selector1 = $('.inside')
            let selector2 = $('.god')
            let initialHTML = $('#target').html()
            nuke(selector1, selector2)
            expect(initialHTML).to.be.equal($('#target').html(), message)

        })
    })
    describe('Both argument are valid(should  work)', function () {
        it('Both argument are valid(should  work)', function () {
            message = "HTML not changed"
            let selector1 = $('.nested')
            let selector2 = $('.target')
            let initialHTML = $('#target').html()
            nuke(selector1, selector2)
            expect(initialHTML).to.not.be.equal($('#target').html(), message)

        })
        it('Changes first selector HTML(should change)', function () {
            message = "HTML not changed"
            let selector1 = $('.nested')
            let selector2 = $('.target')
            let initialHTML = $('.nested').html()
            nuke(selector1, selector2)
            expect(initialHTML).to.not.equal($('.nested').html(), message)

        })
        it('First selector does not hold second selector element(should not change)', function () {
            message = "HTML changed"
            let selector1 = $('.inside')
            let selector2 = $('#target')
            let initialHTML = $('.inside').html()
            nuke(selector1, selector2)
            expect(initialHTML).to.be.equal($('.inside').html(), message)

        })
        it('should not change content if it matches only one selector)', function () {
            message = "HTML changed"
            let selector1 = $('.nested')
            let selector2 = $('.target')
            let initialHTML = $('.inside').html()
            nuke(selector1, selector2)
            expect(initialHTML).to.be.equal($('.inside').html(), message)

        })

    })
})
