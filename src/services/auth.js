import axios from 'axios';
import router from '../router';
import config from '../config';

export default {
    user: {
        authenticated: false
    },

    signup(context, credentials, redirect) {
        let signupUrl = `${config.API_BASE_URL}/api/auth/signup`,
        headers = {
            "Accept": "application/json",
            'Content-Type': 'application/json'
        }
        axios.post(signupUrl, credentials, { headers: headers })
            .then((response) => {
                console.info({ "response": response })
                if (response.status === 200) {
                    localStorage.setItem("auth_token", response.access_token);
                    this.user.authenticated = true
                    if (redirect) {
                        router.push(redirect);
                    }
                } else {
                    context.error = "Could not register the user"
                }
            })
            .catch((err) => {
                console.log(err);
                context.error = err.response
            });
    },

    login(context, credentials, redirect) {
        let loginUrl = `${config.API_BASE_URL}/api/auth/login`,
        headers = {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
        axios.post(loginUrl, credentials, headers)
            .then((response) => {
                console.info({ "response": response })
                if (response.status === 200) {
                    localStorage.setItem("auth_token", response.access_token);
                    this.user.authenticated = true
                    if (redirect) {
                        router.push(redirect);
                    }
                } else {
                    context.error = "Could not register the user"
                }
            })
            .catch((err) => {
                console.log(err);
                context.error = err.response
            });
    }
}