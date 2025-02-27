Array.prototype.myMap = function (callback, context) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback.call(context, this[i], i, this))
    }
    return arr;
}

let context = {
    multiplier: 7,
    offset: 10
};

const arr = [1, 2, 3, 4];

// map(callbackFn, thisArg)
// callbackFn -> thakes : element, index, array as argument
// thisArg -> A value to use as this when executing callbackFn
const arr2 = arr.map(function (val) {
    // don't use arrow function, as this -> window
    return val * this.multiplier * this.offset;
}, context)

console.log(arr2);


const arr3 = arr.myMap(function (val) {
    // don't use arrow function, as this -> window
    return val * this.multiplier * this.offset;
}, context)

console.log(arr3);