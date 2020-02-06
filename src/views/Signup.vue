<template>
    <div class="row my-5">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body">
                    <h3 class="text-center my-4">Sign Up</h3>
                    <div class="form-group">
                        <input v-model="name" type="text" placeholder="Name " class="form-control">
                    </div>
                    <div class="form-group">
                        <input v-model="email" type="text" placeholder="Email" class="form-control">
                    </div>
                    <div class="form-group">
                        <input v-model="password" type="password" placeholder="Password" class="form-control">
                    </div>
                    <div class="form-group text-center">
                        <button @click="registerUser" class="btn form-control btn-success">Signup</button>
                    </div>
                    <p class="text-center">Registered already? <span><router-link to="/login"> Login now </router-link></span></p>

                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import auth from '../services/auth';
export default {
    data() {
        return{
            name: '',
            email: '',
            password: '' 
        }
    },

    methods: {
        registerUser() {
            let credentials = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            auth.signup(this,credentials, 'gallery')
        }
    }

}
</script>