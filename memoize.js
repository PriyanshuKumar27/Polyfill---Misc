const expensiveFunc = (num1, num2) => {
    let output = 1;
    for (let i = 0; i <= 10000000; i++) {
        output += i;
    }
    return num1 + num2 + output;
}

function myMemoize(callbackFn) {
    const cache = [];
    return function (...args) {
        let argsCache = JSON.stringify(args);
        if (!cache[argsCache]) {
            cache[argsCache] = callbackFn.call(this, ...args)
        }
        return cache[argsCache];
    }
}

const betterFunction = myMemoize(expensiveFunc);

const memoizeFunc = myMemoize(expensiveFunc);

console.time();
console.log(memoizeFunc(1, 2));
console.timeEnd();

console.time();
console.log(memoizeFunc(1, 2));
console.timeEnd();
