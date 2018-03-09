class Textbox {
    constructor(selector, regexStr) {
        this._invalidSymbols = regexStr
        this._elements = $(selector)
        this.onInput()
        this._value =''
    }

    onInput() {
        // arrow fn -> this is class
        // this.elements.on('input', (event)=> {
        //     let text = $(event.target).val()
        //     this.value = text
        // })
        let that = this
        this.elements.on('input',function (event) {
            let text = $(event.target).val()
            that.value = text
        } )
    }

    set value(value) {
        this._value = value
        for (let element of this._elements) {
            $(element).val(value)
        }
    }

    get value() {
        return this._value
    }

    get elements() {
        return this._elements
        }
    isValid() {
        return !this._invalidSymbols.test(this.value)
    }

}


let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/)
let inputs = $('.textbox')

inputs.on('input', function () {
    console.log(textbox.value)
})
