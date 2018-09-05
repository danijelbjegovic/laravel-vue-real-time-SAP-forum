import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login'
import Signup from '../components/login/signup'
import Forum from '../components/forum/Forum'
import Logout from '../components/login/Logout'

const routes = [
    { path: '/login', component: Login},
    { path: '/logout', component: Logout},
    { path: '/signup', component: Signup},
    { path: '/forum', component: Forum, name:'forum'}
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history',

})

export default router