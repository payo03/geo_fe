import router from '@/router/index.js';
import axios from '@/router/axiosConfig.js';
import com from '../common.js';

const state = {
    member: JSON.parse(localStorage.getItem('member')),
    memberList: []

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
    memberList(state) {
        axios.post('/rest/vst/memberList', { 

            }, {
                headers: {

                }
            }).then(response => {
                state.memberList = response.data;
            }).catch(error => {
                console.log(error.response);
                console.log(error);
            });
    },
    searchDashboard(state) {

    }

};

const actions = {
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
    login(state, param) {

        return new Promise((resolve, reject) => {
            axios.post('/rest/vst/login', 
                JSON.stringify(param), {
                    headers: {

                    }
                }).then(response => {

                    com.setToken('authToken', response.headers.loginauth, 60 * 1000 * 2);
                    localStorage.setItem('member', JSON.stringify(response.data.member));
                    
                    resolve(JSON.stringify(response.data.member));
                }).catch(error => {
                    console.log(error.response);
                    console.log(error);
                });
        });
        
    },
};

export default {
    namespaced: true, 
    state, 
    getters, 
    mutations, 
    actions
};