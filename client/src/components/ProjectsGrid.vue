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
                      height="200px"
                      :src="project.img"
                      contain
                    >
                    </v-img>
                    <v-spacer></v-spacer>
                    <v-card-text class="pt-8">
                      <h4
                        :class="`
                          text-heading-5
                          text-md-heading-4
                          font-weight-bold
                          pt-4
                          text-left
                          ${themeColorText}
                        `"
                      >
                        {{ project.title }}
                      </h4>
                      <p class="text-left">{{ project.desc }}</p>
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
                        ripple
                        style="height: 100%"
                      >
                        <v-card-title
                          class="green--text text--darken-4 text-h5 pa-4"
                        >
                          Accomplishments
                        </v-card-title>
                        <v-card-text class="hoverText">
                          <ul>
                            <span
                              class="text-body-1 px-4"
                              v-html="project.points"
                            ></span>
                          </ul>
                        </v-card-text>
                        <v-spacer></v-spacer>
                        <v-divider class="green darken-4"></v-divider>
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
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['themeColorText', 'counterThemeColorClass', 'ppC', 'ppAc']),
    ...mapState('projects', ['projects']),
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapMutations(['setPpC', 'setPpAc']),
    ...mapActions('projects', ['init']),
    onPPIntersect(entries) {
      this.setPpAc(entries[0].isIntersecting);
      // this.setPpC(entries[0].isIntersecting);
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
.hoverText {
  min-height: 200px;
  max-height: 300px;
}
</style>
