import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = { //要设置的全局访问的header对象
	Authorization: ""
};
const getters = { //实时监听state值的变化(最新状态)
	authorization(state) {
		return state.Authorization
	}
};
const mutations = {
	authorization(state, authorization) {
		state.Authorization = authorization
	}
};
const actions = {
	setAuthorization(context, authorization) { //同上注释，num为要变化的形参
		context.commit('authorization', authorization)
	}
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});
export default store;
