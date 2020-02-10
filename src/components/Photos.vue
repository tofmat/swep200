<template>
  <div class="container">
    <h3 class="font-weight-light text-center text-lg-left mt-4 mb-0">Your Photos</h3>

    <hr class="mt-2 mb-5" />

    <div class="row text-center text-lg-left">
      <div class="col-lg-4 col-md-4 col-6" v-for="photo in photos" :key="photo.id">
        <img
          v-bind:src="photo.url"
          class="img-fluid rounded"
          alt
          style="height: 200px;width:300px;object-fit: cover;"
        />
        <div class="card-body">
          <p class="card-text text-center">
            <a v-bind:href="photo.url">Download</a> |
            <a v-bind:href="prepareTweetUrl(photo.url)">Share</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["photos"],

  mounted() {},
  methods: {
    prepareTweetUrl(photoUrl) {
      return `https://twitter.com/intent/tweet?text=Checkout%20my%20photo%20on%20Photobox: ${photoUrl}`;
    }
  }
};
</script>