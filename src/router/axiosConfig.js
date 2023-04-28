import axios from 'axios';
import router from './index.js';

const customAxios = axios.create({
    headers: {
        'Content-Type' : 'application/json;charset=UTF-8',
        accept: 'application/json'
    }
})

customAxios.interceptors.request.use(config => {

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        const refreshToken = localStorage.getItem('refreshToken');

        config.headers['accesstoken'] = accessToken;
        config.headers['refreshtoken'] = refreshToken;
    }

    return config
})

customAxios.interceptors.response.use(response => {

    var item = localStorage.getItem('accessToken');
    if (item != null) {
        
        var respItem = response.headers;
        if (respItem.accesstoken != null && item != respItem.accesstoken) {
            localStorage.setItem('accessToken', respItem.accesstoken);
        }
    }

    return response;
}, error => {

    localStorage.clear();
    console.log(localStorage);
    router.push('/');
});

export default customAxios;
