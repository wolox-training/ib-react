// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
    if(time < 5000){
        return Promise.resolve(time);
    }
    return Promise.reject(new Error('This time is too much !'));
}

export function asyncDelay(time) {
    return delay(time);
}
