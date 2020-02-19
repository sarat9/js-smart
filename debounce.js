const debounce = (func, wait) => {
    let timeout
    return function () {
        let args = arguments;
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func(args)
        }, wait)
    }
}

export default debounce;





/*
* Better implementation at Lodash
*/