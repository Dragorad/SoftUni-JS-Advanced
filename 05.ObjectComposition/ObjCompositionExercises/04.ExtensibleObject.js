function getExtendedObject() {
    let newObj = {}
        newObj.extend = function (template) {
            for (let key in template) {
                let element = template[key]
                if (template.hasOwnProperty(key)) {
                    if (typeof element === 'function') {
                        newObj.__proto__[key] = element
                    } else {
                        newObj[key] = element
                    }
                }
            }
        }

    return newObj
}
var template = {
    health: 100,
    mana: 50
}
var testObject = getExtendedObject();
testObject.extend(template);

console.log(testObject)