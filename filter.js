Array.prototype.myFilter = function (callbackFn, thisArg) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFn.call(thisArg, this[i], i, this))
            arr.push(this[i])
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let context = {
    condition: 5
}

const arr2 = arr.myFilter(function (val) {
    return val > this.condition
}, context)

console.log(arr2)