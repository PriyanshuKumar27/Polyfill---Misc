// Infinite sum problem
// sum(1)(2)(3)(4)(5)(6)()

function sum(x) {
    return function by(y) {
        if (y === undefined)
            return x;
        x += y;
        return by;
    }
}

console.log(sum(1)(2)(3)(4)(5)())