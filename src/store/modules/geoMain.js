import router from '@/router';
import axios from 'axios';

const state = {
    sampleData: {},
    memberList: []

};

const getters = {
    getSampleData(state) {

        return state.sampleData;
    },
    getMemberIdList(state) {

        return state.memberList.map(row => row.memberId);
    }
};

const mutations = {
    callSampleLink(state) {
        axios.post('/rest/vst/samplecall', {

                header: "headerText",
                body: "bodyText", 
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: process.env.VUE_APP_AUTHORIZATION
                }
            }).then(response => {
                state.sampleData = response.data;
            }).catch(error => {
                console.log(error.response);
                console.log(error);
            });
    },
    memberList(state) {
        axios.post('/rest/vst/memberList', { 

            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: process.env.VUE_APP_AUTHORIZATION
                }
            }).then(response => {
                state.memberList = response.data;
            }).catch(error => {
                console.log(error.response);
                console.log(error);
            });
    }

};

const actions = {
    login(state, param) {

        axios.post('/rest/vst/login', 
            JSON.stringify(param), {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: process.env.VUE_APP_AUTHORIZATION
                }
            }).then(response => {

                router.push('/');
                console.log(response.headers.loginauth);
            }).catch(error => {
                console.log(error.response);
                console.log(error);
            });
    },
    register(state, param) {

        axios.post('/rest/vst/register', 
            JSON.stringify(param), {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: process.env.VUE_APP_AUTHORIZATION
                }
            }).then(response => {

                router.push('/');
            }).catch(error => {
                console.log(error.response);
                console.log(error);
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