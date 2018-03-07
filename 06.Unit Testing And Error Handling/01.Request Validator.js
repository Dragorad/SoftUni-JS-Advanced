function requestValidator(obj) {

    let methodsArr = ['GET', 'POST', 'DELETE', 'CONNECT']
    let uriPattern = /^[A-Za-z0-9.]+$/
    let versionsArr = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    let messagePattern = /[<>\&\\'"]/g
    let validate = {
        Method: () => {
            if (!methodsArr.includes(obj.method)) {
                return false
            }
            return true

        },

        URI: () => {
            if (uriPattern.test(obj.uri) || obj.uri === '*') {
                return true
            }
            return false
        },
        Version: () => {
            if (!versionsArr.includes(obj.version)) {
                return false
            }
            return true
        },
        Message: () => {
            if (messagePattern.test(obj['message'])) {
                return false
            }
            return true
        }
    }
    let propsArr = ['Method',  'URI','Version', 'Message']
    for (let prop of propsArr) {
        let propName = prop.toLowerCase()
        if (!obj.hasOwnProperty(propName) || !validate[prop]()) {
            //let propName = prop.substr(0,1).toUpperCase() + prop.substr(1)
            throw new Error(`Invalid request header: Invalid ${prop}`)
        }
    }
return obj
}

let bjj = {
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
}
requestValidator(bjj)