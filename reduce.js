Array.prototype.myReduce = function (callbackFn, initialValue) {
    const arr = this;
    const hasInitialValue = arguments.length > 1;
    let accumulator = hasInitialValue ? initialValue : arr[0];
    let startIndex = hasInitialValue ? 0 : 1;
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callbackFn(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

const friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"] },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
    { name: "Alice", books: ["The Lord of the Rings", "The Shining"] }
];
const allBooks = friends.myReduce((acc, cur) => [...acc, ...cur.books], []);

console.log(allBooks);