<template>
<!-- <v-card
  class="mx-auto"
  :value="activeBtn"
> -->
  <v-bottom-navigation
    color="orange lighten-1 text-center "
    style="position: fixed, z-index: 6"
    class="btnNavzindex"
    exact
  >
      <v-btn
        v-for="el in icons"
        :key="el.icon"
        icon
        :to="el.route"
        exact
      >
      <span> {{ el.icon_name }} </span>
      <v-icon size="18px">{{ el.icon }}</v-icon>
      </v-btn>
  </v-bottom-navigation>
<!-- </v-card> -->
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: [
      { icon: 'mdi-eye-circle', icon_name: 'Discover', route: '/discover' },
      { icon: 'mdi-storefront', icon_name: 'Categories', route: '/categories' },
      { icon: 'mdi-map-marker-radius', icon_name: 'Me', route: '/full-map' },
      { icon: 'mdi-map-plus', icon_name: 'Add places', route: '/add-places' }
      /* { icon: 'mdi-account-circle ', icon_name: 'Account' } */
    ],
    activeBtn: null
  })
}
</script>

<style>
.btnNavzindex{
  z-index: 2
}
</style>
