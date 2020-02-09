<template>
  <div>
    <!-- Navigation -->
    <header class="spread">
      <div class="container h-100">
        <div class="row h-75">
          <div class="col-md-6 my-auto">
            <div class="header-content mx-auto">
              <h1 class="tagline">PhotoBox. Your photos, Forever.</h1>
              <p style="font-size: 28px;line-height: 38px;"
              >A simple, private and secure way to preserve your memories. Now and Forever.</p>
              <a href="/signup" class="btn btn-primary btn-cta mt-4">
                Start now
                <span
                  style="vertical-align: middle; margin-left: 15px;position: relative; top:-10%;"
                >
                  <svg
                    height="11px"
                    version="1.1"
                    viewBox="0 0 6 11"
                    width="6px"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      id="Desktop-(AFR)"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g
                        id="Company"
                        stroke="currentColor"
                        stroke-width="1.5"
                        transform="translate(-1311.000000, -42.000000)"
                      >
                        <polyline id="Path-2-Copy" points="1312 43 1316 47.5 1312 52" />
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div class="col-md-6 my-auto">
            <div class="image-collage">
              <div class="col-sm-10">
                <div class="row">
                  <figure class="col-sm-6 mt-auto">
                    <img
                      src="../assets/img/oau.jpg"
                      alt="oau"
                      class="image"
                      style="max-width: 90%;"
                    />
                  </figure>
                  <figure class="col-sm-6">
                    <img src="../assets/img/conf.jpg" alt="conference center" class="image" />
                  </figure>
                </div>
              </div>
              <div class="row">
                <figure class="col-sm-6">
                  <img src="../assets/img/scape.jpg" alt="land scape" class="image" />
                </figure>
                <figure class="col-sm-6">
                  <img src="../assets/img/scape.jpg" alt="city scape" class="image" data-v-4be09693 />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="download bg-primary text-center" id="download">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <h2 class="section-heading">Discover what all the buzz is about!</h2>
            <p>Try out our mobile app. A charade game for you and your company</p>
            <div class="badges">
              <a class="badge-link" href="https://drive.google.com/open?id=1dsSmHemoRQxmSY7HuPqe_o1kNNjVPrg-"><img src="../assets/img/google-play-badge.svg" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {},

  computed: {
    authUser() {
      return this.$root.auth;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("auth");
      localStorage.removeItem("access_token");

      this.$root.auth = {};
      this.$noty.success("You are logged out ");
      this.$router.push("/login");
    }
  }
};
</script>
<style>
@import "../assets/css/landing.css";
</style>