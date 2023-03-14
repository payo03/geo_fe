import Vuex from 'vuex';
import geoMain from './modules/geoMain.js';

export const store = new Vuex.Store({
    // root state
    modules: {
        geoMain
    }
});