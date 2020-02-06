 import Vue from 'vue'

 import Router from 'vue-router'
 import Login from './views/Login.vue'
 import Signup from './views/Signup.vue'
 import Upload from './views/Upload.vue'
 import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/login',
        component: Login
     },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/upload',
        component: Upload
    },
    {
        path: '/home',
        component: Home
    }]
})
 
export default router;