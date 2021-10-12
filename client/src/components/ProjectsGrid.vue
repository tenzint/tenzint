<template>
  <v-container
    :class="`
      amber lighten-5
      black--text
      px-4
      py-8
    `"
    fluid
  >
    <v-row align="center" justify="center" class="my-8">
      <v-col class="text-center">
        <h1
          :class="`
            text-h4
            text-md-h3
            ${themeColorText}
          `"
          id="nav-projects"
        >
          PROJECTS
        </h1>
      </v-col>
    </v-row>
    <v-lazy
      :value="ppC"
      @input="setPpC"
      :options="{
        rootMargin: '80%',
        threshold: 1,
      }"
      min-height="100vh"
      transition="scroll-y-transition"
      v-intersect="onPPIntersect"
    >
      <v-container>
        <v-row class="mb-4" justify="center">
          <template v-for="project in projects">
            <v-col cols="12" sm="6" md="4" :key="project.key">
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <div>
                    <v-img
                      width="100vw"
                      height="220px"
                      class="ma-0 pa-0"
                      :src="project.img"
                      contain
                    >
                    </v-img>
                    <v-spacer></v-spacer>
                    <v-card-text class="pt-8">
                      <h4
                        :class="`
                          text-h6
                          text-md-h5
                          font-weight-bold
                          pa-0 ma-0 pb-2
                          text-left
                          ${themeColorText}
                        `"
                      >
                        {{ project.title }}
                      </h4>
                      <p class="text-left mb-0">{{ project.desc }}</p>
                    </v-card-text>

                    <v-expand-transition>
                      <v-card
                        v-if="hover"
                        class="
                          transition-fast-in-fast-out
                          white
                          v-card--reveal
                          black--text
                        "
                        style="height: 100%"
                      >
                        <v-card-title
                          class="green--text text--darken-4 text-h5 pb-0"
                        >
                          Accomplishments
                        </v-card-title>
                        <v-row
                          align-content="space-between"
                          class="hoverText ma-0 pa-0"
                        >
                          <v-col cols="12" class="ma-0 pa-0 px-4">
                            <ul class="text-left mb-0 pb-0">
                              <span
                                class="text-body-1 pt-0 px-4"
                                v-html="project.points"
                              ></span>
                            </ul>
                          </v-col>
                          <v-col
                            cols="12"
                            class="ma-0 pa-0 mx-auto text-center"
                          >
                            <v-btn
                              color="green darken-4"
                              large
                              outlined
                              class="text-center ma-0 mb-4"
                              v-ripple="{
                                class: 'green--text text--darken-4',
                              }"
                              @click.stop="btnClicked(project.key)"
                              ><b>LEARN MORE</b></v-btn
                            >
                          </v-col>
                        </v-row>
                        <v-spacer></v-spacer>
                        <v-divider
                          v-if="!!project.link || !!project.github"
                          class="green darken-4"
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <v-card-actions>
                          <v-btn
                            v-if="!!project.link"
                            class="mx-2"
                            :href="project.link"
                            target="_blank"
                            fab
                            color="green darken-4"
                            dark
                          >
                            <v-icon dark color="white">mdi-open-in-new</v-icon>
                          </v-btn>
                          <v-btn
                            v-if="!!project.github"
                            class="mx-2"
                            :href="project.github"
                            target="_blank"
                            fab
                            color="green darken-4"
                            dark
                          >
                            <v-icon dark color="white">mdi-github</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-expand-transition>
                  </div>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-lazy>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      overlay-color="green darken-4"
      max-width="600px"
    >
      <v-card>
        <v-card-title class="font-weight-bold pt-4 justify-center text-h5"
          >{{ snapObj.title }}
        </v-card-title>

        <v-card-text>
          <ul class="text-body-2 text-md-body-1 mx-4">
            <span v-html="snapObj.points"></span>
            <li>
              <span class="text-decoration-underline">Utilized:</span>
              {{ snapObj.utilized }}
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapState(['themeColorText', 'counterThemeColorClass', 'ppC', 'ppAc']),
    ...mapState('projects', ['projects', 'detailed', 'pKey', 'snapObj']),
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapMutations(['setPpC', 'setPpAc']),
    ...mapMutations('projects', ['setPKey', 'setSnapObj']),
    ...mapActions('projects', ['init']),
    onPPIntersect(entries) {
      this.setPpAc(entries[0].isIntersecting);
      // this.setPpC(entries[0].isIntersecting);
    },
    btnClicked(pkey) {
      this.setPKey(pkey);
      this.setSnapObj(this.detailed.find((p) => p.key === pkey));
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
a,
a:link,
a:visited {
  color: #33691e;
  text-decoration: underline;
}

a:hover {
  color: #33691e;
  text-decoration: underline;
  font-weight: bold;
  font-size: 20px;
}
.aimg {
  transition: all 0.3s ease-in-out;
}
.aimg:hover {
  transform: scale(1.2);
  display: block;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
.v-card__text h4,
.v-card__title {
  font-family: 'Franklin Gothic' !important;
}
.hoverText {
  min-height: 220px;
  max-height: 300px;
}
.v-btn i:hover {
  transform: scale(1.15);
}
</style>
