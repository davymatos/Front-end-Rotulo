<template>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components:{
      Navbar,
      Footer
    }
  }
</script>

<style scoped>
body{
    background-color: #d5edd3;
}

img{
    max-width:100%;
    height:auto;
}

p{
    font-size:10vw
}
</style>
