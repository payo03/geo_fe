import router from '@/router';
import axios from 'axios';

const state = {
    sampleData: {},
    memberList: []

};

const getters = {
    getSampleData(state) {

        return state.sampleData;
    }
};

const mutations = {
    callSampleLink(state) {
        axios.post('/samplevue/samplelink', {

            header: "headerText",
            body: "bodyText"
        }).then(response => {
            state.sampleData = response.data;
        }).catch(error => {
            console.log(error.response);
            console.log(error);
        });
    },
    callMemberIdList(state) {
        axios.post('/memberList', {

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

        axios.post('/login', {
            param
        }).then(response => {

        }).catch(error => {
            console.log(error.response);
            console.log(error);
        });
    },
    register(state, param) {

        axios.post('/register', JSON.stringify(param), {
            headers: {
                'Content-Type': 'application/json'
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