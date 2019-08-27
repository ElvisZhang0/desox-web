import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [{
			// 登录页
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			// 首页
			path: '/home',
			name: 'Home',
			component: Home
		}
	]
});
