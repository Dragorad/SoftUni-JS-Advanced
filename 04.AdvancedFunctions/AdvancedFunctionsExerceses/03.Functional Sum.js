(function add() {
    let sum = 0
    function addNum(n){
        sum += n
        return addNum
    }
    addNum.toString = ()=> sum
    return addNum
}())

(function solve() {
    let sum = 0;

    function add(num) {
        sum += num;
        return add;
    }

    add.toString = () => sum;
    return add;
}());

console.log(solve(6)(-3))
