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
      <v-list ripple>
        <v-list-item
          ripple
        >
          <v-list-item-content>
            <v-list-item-title
              class=
              "
                pt-4
                pb-0
                mb-0
                white--text
                text-h4
                text-center
                font-weight-bold
              "
            >
              TENZIN
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          ripple
        >
          <v-list-item-content>
            <v-list-item-title
              class=
              "
                mt-0
                pt-0
                white--text
                text-h4
                text-center
                font-weight-bold
              "
            >
              THABKHAE
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider>
      </v-divider>
      <v-list
        dense
        dark
        rounded
      >
        <v-list-item
          link
          to="/"
        >
          <v-list-item-action>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Profile
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="#nav-skills"
        >
          <v-list-item-action>
            <v-icon>mdi-file-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Skills
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="#nav-experience"
        >
          <v-list-item-action>
            <v-icon>mdi-school-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Relevant Experience
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="#nav-projects"
        >
          <v-list-item-action>
            <v-icon>mdi-wrench</v-icon>
          </v-list-item-action>
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
    drawer: false,
  }),
};
</script>
