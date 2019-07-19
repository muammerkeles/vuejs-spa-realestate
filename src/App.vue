<template>
  <div id="app">
    <Header :sliderMsg="sliderMsg"/>
     
    <router-view ></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './assets/components/Header.vue'
import Footer from './assets/components/Footer.vue'

export default {
  name: 'app',
  components:{
    Header,
    Footer,
  },
  data () {
    return {
      sliderMsg:{title:"Find You Dream Home",msg:"Appartements - Houses - Mansions"}
      }
  }
}
</script>

<style>
 
 
</style>
