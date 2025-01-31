Function.prototype.myBind = function (thisArg, ...args) {
    const obj = this;
    if (typeof obj !== 'function') {
        throw new Error(`${obj} is not a function`);
    }

    return function (...args2) {
        obj.apply(thisArg, [...args, ...args2]);
    }
}

Function.prototype.myBind2 = function (...args) {
    const obj = this;
    if (typeof obj !== 'function') {
        throw new Error(`${obj} is not a function`);
    }

    const params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

function printName(hometown, state, country) {
    console.log(`${this.firstName} ${this.lastName} ${hometown} ${state} ${country}`);
}

const name1 = {
    firstName: "Priyanshu",
    lastName: "Kumar"
}

const name2 = {
    firstName: "Prince",
    lastName: "Kr"
}

const name3 = {
    firstName: "Rahul",
    lastName: "Kumar"
}

const printName2 = printName.bind(name1, "Chaibasa", "Jharkhand");
printName2("India");

const printName3 = printName.myBind(name2, "Tata", "Jharkhand");
printName3("India")

const printName4 = printName.myBind2(name3, "Ranchi", "Jharkhand");
printName4("India")