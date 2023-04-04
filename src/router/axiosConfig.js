import axios from 'axios';

const customAxios = axios.create({
    headers: {
        'Content-Type' : 'application/json;charset=UTF-8',
        accept: 'application/json',
        Authorization : process.env.VUE_APP_AUTHORIZATION
    }
})

customAxios.interceptors.request.use(config => {
    const authToken = localStorage.getItem('authToken');

    console.log(authToken);
    if (authToken) {
        config.headers['loginauth'] = authToken;
    }

    return config
})

export default customAxios;
