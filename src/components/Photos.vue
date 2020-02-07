<template>
  <div class="row">
    <div class="card-deck">
      <div class="col-md-4" v-for="photo in photos" :key="photo.id">
        <div class="card">
          <img
            v-bind:src="'http://api-photobox.herokuapp.com/file/'+photo.photo_path"
            alt
            class="card-img-top"
          />
          <div class="card-body">
            <p class="card-text">
              <a href="#">Download</a> | <a href="#">Share</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["photos"],

  mounted() {
    console.log(this.photos);
  },

  methods: {}
};
</script>