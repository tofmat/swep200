 import Vue from 'vue'

 import Router from 'vue-router'
 import Login from './views/Login.vue'
 import Signup from './views/Signup.vue'
 import Upload from './views/Upload.vue'
 import Home from './views/Home.vue'
 import UploadPhoto from './views/UploadPhoto.vue'
 import Gallery from './views/Gallery.vue'
 import Upload2 from './views/Upload2.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
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
        path: '/',
        component: Home
    },
    {
        path: '/uploadphoto',
        component: UploadPhoto
    },
    {
        path: '/gallery',
        component: Gallery
    },
    {
        path: '/upload2',
        component: Upload2
    }
    ]
})
 
export default router;