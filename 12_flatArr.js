const arr = [1, [2, 3, 4, [5, 6, 7], 8, 9], 10, 11]

console.log(arr.flat(Infinity))

const flatArrayMethod = (arr) => {
    let flatArray = [];
    arr.forEach(element => {
        if (!Array.isArray(element))
            flatArray.push(element);
        else
            flatArray = flatArray.concat(flatArrayMethod(element));
    });
    return flatArray;
}

Array.prototype.flatArr = function () {
    const arr = this;
    if (!Array.isArray(arr))
        throw new Error("Not an array, can't call flatArr");
    return flatArrayMethod(arr);
}

console.log(arr.flatArr())