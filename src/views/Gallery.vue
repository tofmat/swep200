<template>
  <div>
    <div class="my-3 mx-3">
    
    </div>
    <Photos v-bind:photos="photos" />
  </div>
</template>

<script>
import Axios from "axios";
import config from "@/config";
import Photos from "@/components/Photos.vue";
export default {
  mounted() {
    this.getPhotos();
  },
  components: {
    Photos,
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
        this.photos = response.data.data.photos;
      });
    }
  }
};
</script>

<style scoped>
  .but{
    background-color: black;
  }
</style>