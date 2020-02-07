<template>
    <div class="row my-5">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body">
                    <h3 class="text-center my-4">Login</h3>
                    <div class="form-group">
                        <input v-bind:class="{'is-invalid' : errors, 'is-valid' : !errors }" v-model="email" type="text" placeholder="Email" class="form-control">
                        <div class="errors" v-if="errors">
                            <small class="text-danger" :key="error" v-for="error in errors">{{error}}</small>
                        </div>
                    </div>
                    <div class="form-group">
                        <input v-bind:class="{'is-invalid' : errors, 'is-valid' : !errors }" v-model="password" type="password" placeholder="Password" class="form-control">
                        <div class="errors" v-if="errors">
                            <small class="text-danger" :key="error" v-for="error in errors">{{error}}</small>
                        </div>
                    </div>
                    <div class="form-group text-center">
                        <button @click="loginUser()" :disabled="loading" class="btn form-control btn-success">
                            <i class="fas fa-spin fa-spinner" v-if="loading"></i>
                            {{ loading ? '' : 'Login' }}
                        </button>
                    </div>
                    <p class="text-center">Dont have an account with us? <span><router-link to="/signup"> Sign up now </router-link></span></p>
                    
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
import Axios from 'axios'
export default {
    data() {
        return{
            email: '',
            password: '',
            errors: {},
            loading: false
        }
    },

    methods: {
        loginUser() {
            this.loading = true ;
            Axios.post('http://api-photobox.herokuapp.com/api/auth/login', {
                email: this.email ,
                password: this.password
            })
            .then(response => {
                this.loading = false;
                this.$noty.success('You are logged in')
                this.$root.auth = response.config.data;
                localStorage.setItem('auth', JSON.stringify(response.config.data))
                this.$router.push('home');
            })
            .catch(({response}) => {
                this.loading = false;
                this.$noty.error('Oops something went wrong')
                if (response.status === 401){
                    this.errors = {
                        email: ["These credentals do not match our records"]
                    };
                    } else {
                         this.errors = response.data;
                    }
            });
        }
    }
}
</script>