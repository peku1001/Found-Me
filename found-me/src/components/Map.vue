<template>
  <v-container>
    <div id="theMap"></div>
  </v-container>
</template>
<script>
// Import dependencies
import L from 'leaflet'
// import { L } from 'mapbox.js'

export default {
  data: () => ({
    /* Data properties will go here */
    map: null,
    tileLayer: null,
    layers: []
  }),
  mounted () {
    /* Code to run when app is mounted */
    // L.mapbox.accessToken = 'pk.eyJ1IjoicGVyaWFsIiwiYSI6ImNrYjgyNGVoZzAwMXkydW80cDFjYzcyejMifQ.hK8DYRzp9F0e2yi3Gree9g'
    console.log('Leaflet!', L)
    this.initMap()
    // this.initLayers()
  },
  methods: {
    /* Any app-specific functions go here */
    initMap () {
      this.map = L.map('theMap').setView([0.0000, -0.0000], 3) // 51.505, -0.09], 13
      // Add the provider on the map
      /* L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      }).addTo(this.map) */
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicGVyaWFsIiwiYSI6ImNrYjgyNGVoZzAwMXkydW80cDFjYzcyejMifQ.hK8DYRzp9F0e2yi3Gree9g'
      }).addTo(this.map)
    }
  }
}
</script>

<style>
#theMap {
/*   touch-action: none;
  z-index: 9999;
  max-height: 100%;
  max-width: 100%; */
  z-index: 3;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0px;
  border-width: 0px;
  margin: 0px;
  left: 0px;
  top: 0px;
  touch-action: none;
}
.leaflet-left .leaflet-control {
  position: fixed;
  bottom: 120px;
  right: 20px;
}
</style>
