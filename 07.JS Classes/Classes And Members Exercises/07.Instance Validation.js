class CheckingAccount {

    constructor(clientId, email, firstName, lastName) {
     [this.clientId, this.email, this.firstName, this.lastName]= [clientId, email, firstName, lastName]
    }

    set clientId(cliendId) {
        let idPattern = /^[0-9]{6}$/
        if (!idPattern.test(cliendId)) {
            throw new TypeError('Client ID must be a 6-digit number')
        }
        this._clientId = cliendId
    }

    set email(email) {
        let emailPattern = /^[\w]+@[a-zA-Z.]+$/
        if (!emailPattern.test(email)) {

            throw new TypeError('Invalid e-mail')
        }
        this._email = email
    }

    set firstName(firstName) {
        let namePattern = /^[a-zA-Z]+$/
        if (firstName.length < 3 || firstName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long')
        }
        if (!namePattern.test(firstName)) {
            throw new TypeError('First name must contain only Latin characters')
        }
        this._firstName = firstName
    }

    set lastName(lastName) {
        let namePattern = /^[a-zA-Z]+$/
        if (lastName.length < 3 || lastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long')
        }
        if (!namePattern.test(lastName)) {
            throw new TypeError('Last name must contain only Latin characters')
        }this._lastName = lastName
    }
}
let c = new CheckingAccount(414123, `d@fwf`, 'fwfw', 'jljlj')
console.log(c)
let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')
let acd = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')
