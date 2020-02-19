/*
* THROTTLE
*/

const throttle = (func, wait) => {
    let inThrottle = false;
    return function () {
        let args = arguments;
        if (!inThrottle) {
            func(args)
            inThrottle = true;
            setTimeout(() => { inThrottle = false }, wait)
        }
    }
}

export default throttle;


/*
* Better implementation at Lodash
*/