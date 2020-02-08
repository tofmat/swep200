<template>
<div class="limiter">
  
  <div class="container-login100" style="background-image: url(../../../images/bg-01.jpg);">
    <picture-input
      ref="pictureInput"
      width="600"
      height="600"
      margin="16"
      accept="image/jpeg, image/png"
      size="10"
      button-class="btn"
      @change="onChange"
    ></picture-input>
    <center><button type="button" class="btn btn-primary text-center my-5" @click="uploadPhoto">Upload</button></center>
  </div>
</div>
</template>

<script>
import PictureInput from "vue-picture-input";
import Axios from "axios";
import config from "@/config";
export default {
  name: "app",
  data() {
    return {
      content: "",
      loading: false
    };
  },
  components: {
    PictureInput
  },
  methods: {
    onChange() {
      if (this.$refs.pictureInput.file) {
        this.image = this.$refs.pictureInput.file;
      }
      console.log(this.image);
    },

    uploadPhoto() {
      let headers = {
        Authorization: "Bearer " + localStorage.getItem("access_token")
      };
      const formData = new FormData();
      formData.append("image", this.image, this.image.name);
      console.log(this.image.name);
      this.loading = true;
      Axios.post(`${config.apiUrl}/photos`, formData, {
        headers: headers
      })
        .then(response => {
          this.$noty.success("You have successfully Uploaded an image");
          console.log(response.data);
          this.$router.push("/gallery");
        })
        .catch(({ response }) => {
          this.$noty.error("Something is wrong try again");
          this.errors = response;
          console.log(response);
        });
    }
  }
};
</script>