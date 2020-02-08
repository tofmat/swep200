<template>
<div>
    <div class="limiter">
		<div class="container-login100" style="background-image: url(../images/bg-01.jpg);">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						Signup
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
                    <span class="label-input100">Full Name</span>

						<input v-bind:class="{'is-invalid' : errors, 'is-valid' : !errors }" v-model="name" type="text" placeholder="Name " class="form-control">
                        <div class="errors" v-if="errors">
                            <small class="text-danger">{{errors.message}}</small>
                        </div>
					</div>
                    <div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
                    <span class="label-input100">Email</span>

                    <input v-bind:class="{'is-invalid' : errors, 'is-valid' : !errors && this.submitted }" v-model="email" type="text" placeholder="Email" class="form-control">
                        <div class="errors" v-if="errors">
                            <small class="text-danger"> {{errors.message}}</small>
                        </div>
                    </div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Password</span>
						<input v-bind:class="{'is-invalid' : errors, 'is-valid' : !errors }" v-model="password" type="password" placeholder="Password" class="form-control">
                        <div class="errors" v-if="errors">
                            <small class="text-danger" :key="error" v-for="error in errors">{{error.message}}</small>
                        </div>
					</div>
					
					
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
                            <button @click="registerUser" :disabled="loading" class="btn form-control btn-success">
                            <i class="fas fa-spin fa-spinner" v-if="loading"></i>
                            {{ loading ? '' : 'Signup' }}
                        </button>
						</div>
					</div>

					<div class="txt1 text-center p-t-54 p-b-20">
						<span>
                            <p class="text-center">Have an account with us? <span><router-link to="/login"> Login now </router-link></span></p>
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
            Axios.post(`${config.apiUrl}/auth/signup`, {
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
                console.log(response)
                this.$router.push('/login');
            })
            .catch(({ response }) => {
                this.loading = false;
                this.$noty.error('Something is wrong try again')
                this.submitted = true;
                this.errors = response.data;
                console.log(response)

            })
        }
    }

}
</script>