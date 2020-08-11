<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      hide-on-scroll
    >
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      color="primary lighten-1"
    >
      <v-list dense dark>
        <v-list-item
          link
          to="/"
        >
          <v-list-item-content>
            Profile
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="#nav-skills"
        >
          <v-list-item-content>
            Skills
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="#nav-volunteer"
        >
          <v-list-item-content>
            Volunteer Experience
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="#nav-school"
        >
          <v-list-item-content>
            School Experience
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="#nav-projects"
        >
          <v-list-item-content>
            Personal Projects
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: null,
  }),
};
</script>
