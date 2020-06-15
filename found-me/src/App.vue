<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <!-- <NavSlide/> -->
        <!-- <HelloWorld/> -->
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Footer from './components/Footer'
// import FullMap from './components/Full_Map'
// import NavSlide from './components/Nav_Slide'

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Footer
    // NavSlide
    // FullMap

  },

  data: () => ({
    //
  })
}
</script>
