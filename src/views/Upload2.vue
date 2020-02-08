<template>
  <div class="hello">    
    <picture-input 
      ref="pictureInput"
      width="600" 
      height="600" 
      margin="16" 
      accept="image/jpeg,image/png" 
      size="10" 
      button-class="btn"
      
      @change="onChange">
    </picture-input>
                        <button type="button" class="btn btn-primary" @click="uploadPhoto">Upload</button>

  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'
import Axios from 'axios'
import config from '@/config';
export default {
    name: 'app',
  data () {
    return {
        content: "",
            loading: false
    }
  },
  components: {
    PictureInput
  },
    methods: {
     onChange (image) {
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
  
        uploadPhoto(){
            let headers = {
             'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
            const formData = new FormData()
            formData.append('image', this.image, this.image.name)
            console.log(this.image.name)
            this.loading = true;
            Axios.post(`${config.apiUrl}/photos`, formData, {
                headers:headers
            })
            .then(response => {
                this.$noty.success('You have successfully Uploaded an image')
                console.log(response.data)
                this.$router.push('/');
            })
            .catch(({ response }) => {
                this.$noty.error('Something is wrong try again')
                this.errors = response;
                console.log(response)
            })
        }
    }

}
</script>