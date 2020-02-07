<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand">Navbar</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item" v-if="authUser.user">
        <router-link to="/uploadphoto" class="nav-link">Upload</router-link>
      </li>
      <li class="nav-item" v-if="!authUser.user">
        <router-link to="/login" class="nav-link">Login</router-link>
      </li>
      <li class="nav-item dropdown" v-if="authUser.user">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hello {{authUser.user.name}}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
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
   mounted() {
     console.log(this.$root);
   },

   computed: {
     authUser() {
       return this.$root.auth
     }
   },
   methods: {
     logout() {
       localStorage.removeItem('auth')
       localStorage.removeItem('access_token')

       this.$root.auth = {};
       this.$noty.success('You are logged out ')
       this.$router.push('/login');

     } 
   }
}
</script>