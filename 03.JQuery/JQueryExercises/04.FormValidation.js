function validate() {
    let allValid = true

    function validCss(boolean, element) {
        if (boolean) {
            $(element).css('border-color', 'red')
            allValid = false
        } else {
            $(element).css('border-color', 'none')
        }
    }

    let userName = $('#username').val()
    $('#submit').on('click', function (ev) {
        ev.preventDefault()
        console.log(userName)
        let userPattern = RegExp(/^[A-Za-z0-9]{3, 20}$/)
        validCss((userPattern.test(userName)), $('#username'))
    })

}