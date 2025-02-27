Function.prototype.myApply1 = function (thisArg, arr) {
    if (typeof this !== 'function') {
        throw new Error(`${this} is not a function`);
    }

    if (!Array.isArray(arr)) {
        throw new Error(`${arr} is not array, can't call myApply on non-array data type`)
    }

    thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : globalThis;
    // thisArg needs to be Object

    const uniqueKey = Symbol('fn');
    thisArg[uniqueKey] = this;
    // creating unique key and assigning method(this)

    const result = thisArg[uniqueKey](...arr);
    delete thisArg[uniqueKey];
    // deleting unique key

    return result;
}

Function.prototype.myApply2 = function (context = {}, arr) {
    if (typeof this !== 'function') {
        throw new Error(`${this} is not a function`);
    }

    if (!Array.isArray(arr)) {
        throw new Error(`${arr} is not array, can't call myApply on non-array data type`)
    }

    context['fn'] = this;
    const result = context.fn(...arr);
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

printName.apply(name1, ["Chaibasa", "Jharkhand", "India"]);
printName.myApply1(name2, ["Tata", "Jharkhand", "India"]);
printName.myApply2(name3, ["Ranchi", "Jharkhand", "India"]);
