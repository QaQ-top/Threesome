import Vue from 'vue';
import Vuex, { Store } from 'vuex';
Vue.use(Vuex);

import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export default new Store({
    state,
    getters,
    actions,
    mutations,
});