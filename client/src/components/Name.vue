<template>
  <v-container
    fluid
    :class="`
      ${themeColorClass}
      ${counterThemeColorText}
    `"
    id="nav-profile"
    v-intersect="onIntersect"
  >
    <v-row
      align="center"
      justify="center"
      no-gutters
      id="name-two"
    >
      <v-col
        cols="12"
        class="text-center
        "
      >
        <transition
          name="fade"
          @after-appear="showIm = true"
          appear
        >
        <span
          class="
            text-subtitle-2
            text-md-body-1
            display-1
            font-weight-black
          "
          v-if="showHi"
        >Hi</span>
        </transition>
        <transition
          name="fade"
          @after-enter="showName = true"
        >
        <span
          class="
            text-subtitle-2
            text-md-body-1
            display-1
            font-weight-black
          "
          v-if="showIm"
        >, I'm</span>
        </transition>
        <transition
          name="fade"
          @after-enter="showSchool = true"
        >
        <h1 class="text-md-h2
          text-h3
          font-weight-bold
          white--text
          "
          v-if="showName"
        >TENZIN THABKHAE</h1>
        </transition>
        <transition
          name="fade"
        >
        <h6 class="text-subtitle-2
          text-md-body-1
          display-1
          font-weight-black
          mt-4
        "
          v-if="showSchool"
        >
          University of Toronto, Software Engineering
        </h6>
        </transition>
      </v-col>
    </v-row>
    <transition
      name="fade"
    >
      <ContactInfo
        v-if="showSchool"
      ></ContactInfo>
    </transition>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

const ContactInfo = () => import('./ContactInfo.vue');
export default {
  components: {
    ContactInfo,
  },
  data() {
    return {
      showHi: true,
      showIm: false,
      showName: false,
      showSchool: false,
    };
  },
  computed: {
    ...mapState([
      'themeColorClass',
      'counterThemeColorText',
      'nameC',
      'nameAc',
    ]),
  },
  methods: {
    ...mapMutations([
      'setNameC',
      'setNameAc',
    ]),
    onNameIntersect(entries) {
      this.setNameC(entries[0].nameC);
    },
    onIntersect(entries) {
      this.setNameAc(entries[0].isIntersecting);
    },
  },
};
</script>

<style scoped>
  a, a:link, a:visited {
    color: #FCE4EC;
    text-decoration: none;
  }
  a:hover {
    color: #AB47BC;
    text-decoration: underline;
    font-weight: bold;
    font-size: 20px;
  }
  #name-two {
    min-height: 70vh;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-appear-active {
    transition: opacity .3s ease;
  }

  .fade-appear {
    opacity: 0;
  }
</style>
