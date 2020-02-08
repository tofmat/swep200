<template>
<div class="row my-2 clear-fix">
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary ml-auto" data-toggle="modal" data-target="#exampleModal">
 Upload Image
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="my-5">
                    <div class="card-body">
                        <input type="file" @change="onChange">
                        <button @click="uploadPhoto">Upload!</button>
                    </div>
                    </div>
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
            console.log(this.image)
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
