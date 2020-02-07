<template>
  <div id="app">
    <div class="">
      <Navbar />
      <router-view></router-view> 
    </div>  
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {

  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
  * {
    font-family: 'Poppins';
    border-radius: 0px !important;

  }

  body{
  }
</style>
