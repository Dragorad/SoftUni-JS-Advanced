class Stringer{
    constructor(string, length){
        [this.innerString, this.innerLength] = [string, Number(length)]
    }
    increase(num){
        if(num < 0){
            num = 0
        }
        this.innerLength += num

    }
    decrease(num){
        this.innerLength -= num
        if(this.innerLength < 0){
            this.innerLength = 0
        }

    }
    toString(){
        let returnString = this.innerString
        let dotsString = '...'
        if (this.innerLength == 0){
            return dotsString
        }
        if (this.innerLength < this.innerString.length){
            returnString = returnString.substr(0, this.innerLength)
            return returnString + dotsString
        }
        return returnString
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
