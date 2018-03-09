class Data {
    constructor(method, uri, version, message){

        [this.method, this.uri, this.version, this.message] = [method, uri, version, message]
        this.response = undefined
        this.fulfilled  = false
    }

}