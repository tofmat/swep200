<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2 my-5">
                <div class="my-5">
                    <div class="card-body">
                        <input type="file" @change="onChange">
                        <button @click="uploadPhoto">Upload!</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Axios from 'axios'
import config from '@/config';
export default {
    components: {
    },
    data(){
        return {
            content: "",
            image: null,
            loading: false
        }
    },
    methods: {
        onChange(event) {
            this.image = event.target.files[0]
        },
        uploadPhoto(){
            let headers = {
             'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
            const formData = new FormData()
            formData.append('image', this.image, this.image.name)
            this.loading = true;
            Axios.post(`${config.apiUrl}/photos`, formData, {
                headers:headers
            })
            .then(response => {
                this.$noty.success('You have successfully Uploaded an image')
                // this.$router.push('/');
            })
            .catch(({ response }) => {
                this.$noty.error('Something is wrong try again')
                this.errors = response;
            })
        }
    }
}
</script>

<style scoped>
    .image{
        padding: 30px;
    }
</style>