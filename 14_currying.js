let multiply = function (x, y) {
    console.log(x * y);
}

// using bind method
let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(3);

let multiplyByFive = multiply.bind(this, 5)
multiplyByTwo(3);


//using closures
function mulltiply(x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyBySeven = mulltiply(7);
multiplyBySeven(5);
mulltiply(6)(7);