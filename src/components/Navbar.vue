<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <span id="photo">Photo</span>
        <span id="box">Box</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item" v-if="authUser.user">
            <router-link to="/upload" class="nav-link">Upload</router-link>
          </li>
          <li class="nav-item" v-if="authUser.user">
            <router-link to="/gallery" class="nav-link">Photos</router-link>
          </li>
          <li class="nav-item" v-if="!authUser.user">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>

          <li class="nav-item" v-if="!authUser.user">
            <router-link
              to="/signup"
              class="nav-link btn btn-primary"
              style="box-shadow: 0 2px 3px 0 #ccc;color: #fff;letter-spacing: 0;text-transform: none;"
            >Create Account</router-link>
          </li>
          <li class="nav-item dropdown" v-if="authUser.user">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Hello {{authUser.user.name}}</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" @click="logout()" href="#">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
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
<style scoped>
.navbar-brand {
  font-family: "Varela Round", sans-serif;
  font-weight: 500;
}
.navbar-brand span#photo {
  font-family: "Varela Round", sans-serif !important;
  color: #1867f8;
}
.navbar-brand span#box {
  font-family: "Varela Round", sans-serif !important;
  color: #202a3c;
}
</style>