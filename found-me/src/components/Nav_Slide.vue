<template>
  <v-container style="z-index: 6; border-radius: 15px">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item-content>
            <v-row
        align="center"
        style="max-width: 240px"
      >
      <v-icon
        class="mx-4"
        large
        color="orange lighten-2 text-center "
      >
        mdi-map-marker-circle
      </v-icon>
      <v-toolbar-title class="mr-12 align-center" >
        <span class="title" style="color: orange">Found Me</span>
      </v-toolbar-title>
      </v-row>
          </v-list-item-content>
        <v-divider></v-divider>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-subheader class="mt-4 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-item
            v-for="item in items2"
            :key="item.text"
            link
          >
            <v-list-item-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              >
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list> -->
        <v-divider></v-divider>
        <v-spacer></v-spacer>
        <v-list-item
          class="mt-4"
          link
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-tools</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Settings</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar
      app
      clipped-left
      color="white lighten-2 text-center "
    > -->
     <v-toolbar class=" d-none d-md-block d-lg-block d-xl-block flex-wrap navZindex" style="max-width: 100%">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-row
        align="center"
        style="max-width: 240px"
      >
      <v-icon
        class="mx-4"
        large
        color="orange lighten-2 text-center "
      >
        mdi-map-marker-circle
      </v-icon>
      <v-toolbar-title class="mr-12 align-center" >
        <span class="title" style="color: orange">Found Me</span>
      </v-toolbar-title>
      </v-row>
      <v-row
        align="center"
        style="max-width: 420px"
      >
      <v-text-field
        label="Search"
        dense

        solo
        clearable
        style="margin-top: 25px"
      >
      </v-text-field>
      <v-btn class="my-1 ma-4" tile >
        <v-icon text>mdi-magnify</v-icon>
      </v-btn>
    </v-row>
    </v-toolbar>
    <v-toolbar
      dense
      floating
      class="d-sm-none text-xs-center"
      style="width: 640px"
    >

      <v-btn icon>
        <v-icon @click.stop="drawer = !drawer">mdi-menu</v-icon>
      </v-btn>
      <v-text-field
        hide-details
        label="Found Here..."
        single-line
      ></v-text-field>
      <v-btn icon style="margin: 5px">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
          <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-avatar
        size="36"
        v-bind="attrs"
        v-on="on"
        right
      >
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
      </template>
      <v-card>
        <v-toolbar dark color="white lighten-2" class="text-center" >
          <v-btn icon dark @click="dialog = false">
            <v-icon class="black--text">mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="orange--text text-center"><b>Found Me</b></v-toolbar-title>
          <v-spacer></v-spacer>

        </v-toolbar>
        <v-list three-line subheader>
            <v-row
              align="center"
              class="spacer"
              style="margin-top: -15px"
              no-gutters
            >
              <v-col class="ma-4" cols="2">
                <v-avatar size="42">
               <img
                 src="https://cdn.vuetifyjs.com/images/john.jpg"
                 alt="John"
                >
                </v-avatar>
              </v-col>
              <v-col cols="8">
              <v-list-item
                style="margin-left: -35px;margin-top: 30px"
              >
                <v-list-item-content style="display:initial">
                  <v-list-item-subtitle ><b>Perial Dupont</b></v-list-item-subtitle>
                  <v-list-item-subtitle style="font-size: 11px">+49177634410530</v-list-item-subtitle>
                  <v-list-item-subtitle style="font-size: 14px;margin-top: 10px">ABC9QW</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              </v-col>
            </v-row>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <!-- <v-checkbox v-model="notifications"></v-checkbox> -->
              <!-- <v-sheet> -->
                <v-switch v-model="notifications" inset  class="my-5"></v-switch>
              <!-- </v-sheet> -->
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-switch v-model="widgets" inset class="my-5"></v-switch>
              <!-- <v-checkbox v-model="widgets"></v-checkbox> -->
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
    </v-toolbar>
  <!-- </v-app-bar> -->
  </v-container>

</template>

<script>
export default {
  name: 'Nav_Slide',
  data: () => ({
    drawer: false,
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    items: [
      { icon: 'mdi-trending-up', text: 'Profil' },
      { icon: 'mdi-youtube-subscription', text: 'Orders' },
      { icon: 'mdi-history', text: 'Add Users' },
      { icon: 'mdi-playlist-play', text: 'Settings' },
      { icon: 'mdi-playlist-play', text: 'Help & Feedback' },
      { icon: 'mdi-playlist-play', text: 'Add Places' },
      { icon: 'mdi-playlist-play', text: 'Delivers' }
    ],
    items2: [
      { picture: 28, text: 'Joseph' },
      { picture: 38, text: 'Apple' },
      { picture: 48, text: 'Xbox Ahoy' },
      { picture: 58, text: 'Nokia' },
      { picture: 78, text: 'MKBHD' }
    ]
  })
  /* created () {
    this.$vuetify.theme.dark = true
  } */
}
</script>
<style>
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 36px !important
}
.v-input__slot{
  margin-left: 15px
}
.v-btn:not(.v-btn--round).v-size--default{
  height: 35px !important
}
.navZindex {
  z-index: 2;
}
.v-toolbar__content {
  width: 950px
}
.v-toolbar--floating {
  border-radius: 8px;
}
</style>
