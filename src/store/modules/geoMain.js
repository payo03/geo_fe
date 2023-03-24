import axios from 'axios';

const state = {
    sampleData: {}

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
    login(state, param) {

        axios.post('/login', {
            param
        }).then(response => {
            state.sampleData = response.data;
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
    mutations
};