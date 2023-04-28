const currentTime = new Date().getTime();

function setToken(key, value, time) {

    let obj = {
        value: value,
        expiration: currentTime + time
    };

    localStorage.setItem(key, JSON.stringify(obj));
}

export default {
    setToken,
};