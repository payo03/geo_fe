import router from '@/router/index.js';
import axios from '@/router/axiosConfig.js';
import com from '../common.js';

const state = {
    member: JSON.parse(localStorage.getItem('member')),
    memberList: JSON.parse(localStorage.getItem('memberList')),
};

const getters = {
    getMemberData(state){

        return state.member;
    },
    getMemberIdList(state) {

        return state.memberList.map(row => row.memberId);
    }
};

const mutations = {
    register(state, param) {

        axios.post('/rest/vst/register',
            JSON.stringify(param), {

                headers : {
                    
                }
            }).then(response => {

                router.push('/');
            }).catch(error => {
                console.log(error.response);
                console.log(error);
            });
    },
    searchDashboard(state) {

    }

};

const actions = {
    login(state, param) {

        return new Promise((resolve, reject) => {
            axios.post('/rest/vst/login', 
                JSON.stringify(param), {
                    headers: {

                    }
                }).then(response => {
                    localStorage.setItem('accessToken', response.headers.accesstoken);
                    localStorage.setItem('refreshToken', response.headers.refreshtoken);
                    localStorage.setItem('member', JSON.stringify(response.data));
                    
                    resolve(response.data);
                }).catch(error => {
                    console.log(error.response);
                    console.log(error);
                });
        });
        
    },
    memberList(state) {

        return new Promise((resolve, reject) => {
            axios.post('/rest/vst/memberList', {
                    headers: {

                    }
                }).then(response => {
                    localStorage.setItem('memberList', JSON.stringify(response.data));
                    
                    resolve(response.data);
                }).catch(error => {
                    console.log(error.response);
                    console.log(error);
                });
        });
    },
    updateStatus(state, param) {

        return new Promise((resolve, reject) => {
            axios.post('/rest/auth/updatestatus', param, {
                    headers: {

                    }
                }).then(response => {
                    if(response != undefined) localStorage.setItem('member', JSON.stringify(param));

                    resolve(param);
                }).catch(error => {
                    console.log(error.response);
                    console.log(error);
                });
        });
    }
};

export default {
    namespaced: true, 
    state, 
    getters, 
    mutations, 
    actions
};