let counter = 0;
const getData = () => {
    console.log("Fetching data", counter++)
}

const throttle = function (callbackFn, timer) {
    let flag = true;
    return function () {
        let context = this;
        let args = arguments;
        if (flag) {
            callbackFn.call(context, args);
            // console.log(this); // this refers to the reference calling better function, here button
            flag = false;
            setTimeout(() => {
                flag = true;
            }, timer);
        }
    }
}

const betterFunction = throttle(getData, 2000);

document.getElementById('btn-throttle').addEventListener('click', betterFunction);