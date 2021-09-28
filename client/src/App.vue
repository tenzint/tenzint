<template>
  <v-app>
    <v-app-bar
      app
      :color="themeColorClass"
      dark
      :hide-on-scroll="$vuetify.breakpoint.smAndDown"
      :value="$vuetify.breakpoint.smAndDown"
    >
      <v-snackbar
        timeout="6000"
        dark
        top
        right
        :color="themeColorClass"
        elevation="20"
        shaped
        transition="fab-transition"
        width="10"
      >
        <template v-slot:action="{ attrs }">
          <v-chip
            class="font-weight-black"
            :color="themeColorClass"
            text-color="white"
            v-bind="attrs"
          >
            Click menu bar
            <v-avatar color="white" class="red--text text-h4" size="96" right>
              <v-icon>mdi-arrow-up-circle-outline</v-icon>
            </v-avatar>
          </v-chip>
        </template>
      </v-snackbar>
      <v-tooltip
        left
        transition="slide-x-reverse-transition"
        v-if="$vuetify.breakpoint.mdAndDown"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon
            v-bind="attrs"
            v-on="on"
            class="outside-click-exclude"
            @click.stop="drawer = !drawer"
          >
          </v-app-bar-nav-icon>
        </template>
        <span>Toggle navigation drawer</span>
      </v-tooltip>
    </v-app-bar>
    <v-navigation-drawer
      app
      disable-route-watcher
      v-model="drawer"
      expand-on-hover
      floating
      mini-variant-width="53"
      :color="themeColorClass"
      :overlay-color="themeColorClass"
      overlay-opacity=".8"
      :permanent="$vuetify.breakpoint.mdAndUp && activateDrawer"
    >
      <v-list ripple nav>
        <v-list-item ripple>
          <v-list-item-content>
            <v-list-item-title
              :class="`
                pt-4
                pb-0
                mb-0
                text-h4
                text-center
                font-weight-bold
                ${counterThemeColorText}
              `"
            >
              TENZIN
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item ripple>
          <v-list-item-content>
            <v-list-item-title
              :class="`
                mt-0
                pt-0
                text-h4
                text-center
                font-weight-bold
                ${counterThemeColorText}
              `"
            >
              THABKHAE
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider> </v-divider>
      <v-list dark dense rounded nav>
        <v-list-item
          link
          @click="
            $vuetify.goTo('#nav-profile', {
              duration: 1500,
              easing: 'easeInOutQuint',
            })
          "
          :input-value="nameAc"
          color="white"
        >
          <v-list-item-action>
            <v-icon :class="counterThemeColorText">mdi-account-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content :class="counterThemeColorText">
            Profile
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="
            $vuetify.goTo('#nav-skills', {
              duration: 1500,
              easing: 'easeInOutQuint',
            })
          "
          :input-value="skillsAc"
          color="white"
        >
          <v-list-item-action>
            <v-icon :class="counterThemeColorText">mdi-equalizer</v-icon>
          </v-list-item-action>
          <v-list-item-content :class="counterThemeColorText">
            Skills
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="
            $vuetify.goTo('#nav-experience', {
              duration: 1500,
              easing: 'easeInOutQuint',
            })
          "
          :input-value="expAc"
          color="white"
        >
          <v-list-item-action>
            <v-icon :class="counterThemeColorText">mdi-trending-up</v-icon>
          </v-list-item-action>
          <v-list-item-content :class="counterThemeColorText">
            Experience
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="
            $vuetify.goTo('#nav-projects', {
              duration: 1500,
              easing: 'easeInOutQuint',
            })
          "
          :input-value="ppAc"
          color="white"
        >
          <v-list-item-action>
            <v-icon :class="counterThemeColorText">mdi-wrench</v-icon>
          </v-list-item-action>
          <v-list-item-content :class="counterThemeColorText">
            Projects
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="
            $vuetify.goTo('#nav-hobby', {
              duration: 1500,
              easing: 'easeInOutQuint',
            })
          "
          :input-value="hobbyAc"
          color="white"
        >
          <v-list-item-action>
            <v-icon :class="counterThemeColorText">mdi-table-tennis</v-icon>
          </v-list-item-action>
          <v-list-item-content :class="counterThemeColorText">
            Hobbies
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main id="page-one">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',

  data: () => ({}),
  computed: {
    ...mapState([
      'themeColor',
      'themeColorClass',
      'counterThemeColorText',
      'counterThemeColorClass',
      'nameAc',
      'skillsAc',
      'expAc',
      'ppAc',
      'hobbyAc',
      'activateDrawer',
    ]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(value) {
        this.$store.commit('setDrawer', value);
      },
    },
  },
};
</script>
<style lang="scss">
@import '@/sass/variables.scss';
</style>
<style scoped>
#page-one {
  height: 100%;
}
</style>
