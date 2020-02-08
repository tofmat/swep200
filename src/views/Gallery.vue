<template>
  <div>
    <Upload />
    <Photos v-bind:photos="photos" />
  </div>
</template>

<script>
import Axios from "axios";
import config from "@/config";
import Photos from "@/components/Photos.vue";
import Upload from "@/components/Upload.vue"
export default {
  mounted() {
    this.getPhotos();
  },
  components: {
    Photos,
    Upload
  },
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token")
  },
  data() {
    return {
      photos: {}
    };
  },
  methods: {
    getPhotos() {
      let headers = {
        Authorization: "Bearer " + localStorage.getItem("access_token")
      };
      Axios.get(`${config.apiUrl}/gallery`, {
        headers: headers
      }).then(response => {
        console.log(response);
        this.photos = response.data.data.photos;
      });
    }
  }
};
</script>