<template>
  <div class="spread">
    <div class="container">
      <div class="row">
        <div class="col-md-3 my-3">
          <div
            style="background-color: #fff;border-radius: 4px !important;min-height:500px;padding:12px;"
          >
            <div
              style="height:120px; width:120px;background-color:#dadef5;border-radius:80px !important;"
              class="mx-auto"
            ></div>
            <p class="text-center my-3" style="text-transform: capitalize;">{{this.$root.auth.user.name}}</p>
            <hr />
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 25%;"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >25%</div>
            </div>
            <p class="text-center text-muted text-small">25% of 100GB</p>
            <hr />
            <ul>
              <li>
                <p style="display: flex;justify-content: space-between;">
                  <span class="pull-left">Photos</span>
                  <span class="text-right font-weight-bold pull-right">{{photos.length}}</span>
                </p>

                <p style="display: flex;justify-content: space-between;">
                  <span class="pull-left">Albums</span>
                  <span class="text-right font-weight-bold pull-right">0</span>
                </p>

                <p style="display: flex;justify-content: space-between;">
                  <span class="pull-left">Joined</span>
                  <span class="text-right font-weight-bold pull-right">5 days ago</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-9">
          <Photos v-bind:photos="photos" />
        </div>
      </div>
    </div>
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
    Photos
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
.but {
  background-color: black;
}
</style>