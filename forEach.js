Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

const arrData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arrData.myForEach((element) => {
    console.log(element);
});