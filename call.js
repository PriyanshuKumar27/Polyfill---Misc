Function.prototype.myCall1 = function (thisArg, ...args) {
    if (typeof this !== 'function') {
        throw new Error(`${this} is not a function`);
    }

    thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : globalThis;
    // thisArg needs to be Object

    const uniqueKey = Symbol('fn');
    thisArg[uniqueKey] = this;
    // creating unique key and assigning method(this)

    const result = thisArg[uniqueKey](...args);
    delete thisArg[uniqueKey];
    // deleting unique key

    return result;
}

Function.prototype.myCall2 = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(`${this} is not a function`);
    }

    context['fn'] = this;
    const result = context.fn(...args);
    delete context.fn;

    return result;
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

printName.call(name1, "Chaibasa", "Jharkhand", "India");
printName.myCall1(name2, "Tata", "Jharkhand", "India");
printName.myCall1(name3, "Ranchi", "Jharkhand", "India");
