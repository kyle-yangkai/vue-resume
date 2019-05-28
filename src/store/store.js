import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    isPc: true
}
const mutations = {
    isNotPc (state) {
        state.isPc = false
    }
}
export default new Vuex.Store({
    state,
    mutations
})