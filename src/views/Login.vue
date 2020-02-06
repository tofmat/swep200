<template>
    <div class="row my-5">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body">
                    <h3 class="text-center my-4">Login</h3>
                    <div class="form-group">
                        <input type="text" placeholder="Email" class="form-control" v-model="email">
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Password" class="form-control" v-model="password">
                    </div>
                    <div class="form-group text-center">
                        <button class="btn form-control btn-success" @click="loginUser">Login</button>
                    </div>
                    <p class="text-center">Dont have an account with us? <span><router-link to="/signup"> Sign up now </router-link></span></p>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import auth from '../services/auth';
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        loginUser() {
            let credentials = {
                email: this.email,
                password: this.password
            }
            auth.login(this, credentials, 'gallery')
        }
    }
}
</script>