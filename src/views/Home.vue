<template>
    <div>
        <div class="col-md-8" v-for="photo in photos.data" :key="photo.id"></div>
        <h1 class="text-center my-5"> Welcome to the home screen </h1>
        <Upload />
        <Photos :photo="photo " />


                        <div class="">
                    <div class="card-deck">
                <div class="card"  v-for="photo in this.photos" :key="photo">
                    <img v-bind:src="'http://api-photobox.herokuapp.com/file/'+this.photos[1].photo_path" alt="" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                    </div>
                        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import config  from '@/config';
import Photos from '@/components/Photos.vue'
import Upload from '@/components/Upload.vue'
export default {
    mounted() {
        this.getPhotos();
    },
    components: {
        Photos,
        Upload
    },
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
  },
    data() {
        return{
            photos: {}
        }
    },
    methods: {
        getPhotos(){
           let headers = {
             'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
            Axios.get(`${config.apiUrl}/gallery`, {
                headers:headers
            })
            .then(response => {
                console.log(response)
                this.photos = response.data.data.photos
                console.log('http://api-photobox.herokuapp.com/file/'+this.photos[1].photo_path);
                console.log(response.data.data.photos)
            })
        
        }
    }
}
</script>