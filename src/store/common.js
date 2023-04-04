const currentTime = new Date().getTime();

function setToken(key, value, time) {

    let obj = {
        value: value,
        expiration: currentTime + time
    };

    localStorage.setItem(key, JSON.stringify(obj));
}

function getToken() {

    let item = localStorage.getItem('authToken');
    if (item) {

        item = JSON.parse(item);
        if(currentTime > item.expiration) {

            localStorage.clear();
            return null;
        } else {
            return item.value;
        }
    } else {
        return null;
    }
}

export default {
    setToken,
    getToken
};