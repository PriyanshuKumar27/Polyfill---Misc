let counter = 0;
const getData = () => {
    console.log("Fetching data", counter++)
}

const debounce = function (callbackFn, timer) {
    let timeOut;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            callbackFn.call(context, args)
        }, timer)

    }
}

const betterFunction = debounce(getData, 2000);

document.getElementById('btn-debounce').addEventListener('click', betterFunction);