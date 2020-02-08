<template>
<div class="container">

  <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Your Gallery</h1>

  <hr class="mt-2 mb-5">

  <div class="row text-center text-lg-left">

    <div class="col-lg-3 col-md-4 col-6" v-for="photo in photos" :key="photo.id">
            <img v-bind:src="photo.url" width="400px"
            height="300px"
             class="img-fluid img-thumbnail" alt="" />
         <div class="card-body">
            <p class="card-text text-center">
              <a href="#">Download</a> | <a href="#">Share</a>
            </p>
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