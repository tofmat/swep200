<template>
<div>
    <div class="limiter">
		<div class="container-login100" style="background-image: url(../images/bg-01.jpg);">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						Login
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<input v-bind:class="{'is-invalid' : errors, 'is-valid' : !errors }" v-model="email" type="text" placeholder="Email" class="form-control">
                        <div class="errors" v-if="errors">
                            <small class="text-danger" :key="error" v-for="error in errors">{{error}}</small>
                        </div>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Password</span>
						<input v-bind:class="{'is-invalid' : errors, 'is-valid' : !errors }" v-model="password" type="password" placeholder="Password" class="form-control">
                        <div class="errors" v-if="errors">
                            <small class="text-danger" :key="error" v-for="error in errors">{{error}}</small>
                        </div>
					</div>
					
					<div class="text-right p-t-8 p-b-31">
						<a href="#">
							Forgot password?
						</a>
					</div>
					
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
                            <button @click="loginUser()" :disabled="loading" class="login100-form-btn">
                            <i class="fas fa-spin fa-spinner" v-if="loading"></i>
                            {{ loading ? '' : 'Login' }}
                        </button>
						</div>
					</div>

					<div class="txt1 text-center p-t-54 p-b-20">
						<span>
                            <p class="text-center">Dont have an account with us? <span><router-link to="/signup"> Sign up now </router-link></span></p>
						</span>
					</div>

				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>

    </div>
</template> 

<script>
import Axios from 'axios'
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
            email: '',
            password: '',
            errors: {},
            loading: false
        }
    },

    methods: {
        loginUser() {
            this.loading = true ;
            Axios.post(`${config.apiUrl}/auth/login`, {
                email: this.email ,
                password: this.password
            })
            .then(response => {
                this.loading = false;
                this.$noty.success('You are logged in')
                this.$root.auth = response.data;
                localStorage.setItem('auth', JSON.stringify(response.data))
                localStorage.setItem('access_token',(response.data.access_token))

                this.$router.push('/');
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
