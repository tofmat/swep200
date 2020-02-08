<template>
    <div class="row my-5">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body">
                    <h3 class="text-center my-4">Sign Up</h3>
                    <div class="form-group">
                        <input v-bind:class="{'is-invalid' : errors, 'is-valid' : !errors }" v-model="name" type="text" placeholder="Name " class="form-control">
                        <div class="errors" v-if="errors.name">
                            <small class="text-danger" :key="error" v-for="error in errors.name">{{error}}</small>
                        </div>
                    </div>
                    <div class="form-group">
                        <input v-bind:class="{'is-invalid' : errors, 'is-valid' : !errors && this.submitted }" v-model="email" type="text" placeholder="Email" class="form-control">
                        <div class="errors" v-if="errors.email">
                            <small class="text-danger" :key="error" v-for="error in errors"> {{error}}</small>
                        </div>
                    </div>
                    <div class="form-group">
                        <input v-bind:class="{'is-invalid' : errors, 'is-valid' : !errors }" v-model="password" type="password" placeholder="Password" class="form-control">
                        <div class="errors" v-if="errors">
                            <small class="text-danger" :key="error" v-for="error in errors">{{error}}</small>
                        </div>
                    </div>
                    <div class="form-group text-center">
                        <button @click="registerUser" :disabled="loading" class="btn form-control btn-success">
                            <i class="fas fa-spin fa-spinner" v-if="loading"></i>
                            {{ loading ? '' : 'Signup' }}
                        </button>
                    </div>
                    <p class="text-center">Registered already? <span><router-link to="/login"> Login now </router-link></span></p>

                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import config from '@/config';
export default { 
    beforeRouteEnter(to, from, next) {
        if (localStorage.getItem("auth")){
            return next({ path: "/"})
        }

        next();

    },
    data() {
        return{
            name: '',
            email: '',
            password: '',
            errors: {},
            submitted: false,
            loading: false
        }
    },

    methods: {
        registerUser() {
            this.loading = true;
            Axios.post(`${config.apiUrl}/auth/sigup`, {
                name: this.name,
                email: this.email,
                password: this.password
            })
            .then(response => {
                this.loading = false;
                this.submitted = true;
                localStorage.setItem('auth', JSON.stringify(response.data))
                localStorage.setItem('access_token',(response.data.access_token))
                this.$root.auth = response.data;
                this.$noty.success('You have successfully registered')

                this.$router.push('/');
            })
            .catch(({ response }) => {
                this.loading = false;
                this.$noty.error('Something is wrong try again')
                this.submitted = true;
                this.errors = response.data;
            })
        }
    }

}
</script>