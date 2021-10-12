<template>
  <v-container
    class="orange lighten-5 black--text px-4 py-8"
    id="skills-container"
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
          id="nav-skills"
        >
          SKILLS
        </h1>
      </v-col>
    </v-row>
    <v-lazy
      :value="skillsC"
      @value="setSkillsC"
      :options="{
        rootMargin: '80%',
        threshold: 1,
      }"
      min-height="100vh"
      transition="scroll-y-reverse-transition"
      v-intersect="onSkillsIntersect"
    >
      <v-row justify="center">
        <v-col cols="12" md="4" class="elevation-16 pa-4">
          <h4
            :class="`
            text-h6
            text-md-h5
            font-weight-black
            ${themeColorText}
            mb-4
            subTitle
            text-center
          `"
          >
            QUALITIES
          </h4>
          <template v-for="(qualObj, index) in qualArray">
            <v-row
              align="center"
              justify="center"
              :key="qualObj.key"
              class="my-0 py-0"
            >
              <v-tooltip right :disabled="!qualObj.hint" color="green darken-4">
                <template v-slot:activator="{ on, attrs }">
                  <v-col
                    cols="6"
                    class="text-right my-0 py-0"
                    v-bind="attrs"
                    v-on="on"
                    ><v-chip color="green darken-4" outlined class="my-2" dark>
                      <v-icon v-if="!!qualObj.mdi" class="mr-2">
                        {{ qualObj.mdi }}</v-icon
                      >
                      {{ qualObj.name }}
                    </v-chip>
                  </v-col>
                </template>
                <span v-if="!!qualObj.hint">{{ qualObj.hint }}</span>
              </v-tooltip>
              <v-col cols="6" class="text-left my-0 py-0">
                <v-rating
                  readonly
                  half-increments
                  color="green darken-4"
                  background-color="green darken-4"
                  length="5"
                  half-icon="mdi-star-half-full"
                  dense
                  :small="$vuetify.breakpoint.smAndDown"
                  :value="qualObj.value"
                ></v-rating>
              </v-col>
            </v-row>
            <v-divider
              v-if="qualObj.divide"
              class="green darken-4 my-2"
              :key="qualObj.key + '-' + index"
            ></v-divider>
          </template>
        </v-col>
        <v-col cols="12" md="4" class="elevation-16 pa-4">
          <h4
            :class="`
            text-h6
            text-md-h5
            font-weight-black
            ${themeColorText}
            mb-4
            subTitle
            text-center
          `"
          >
            SOFTWARE
          </h4>
          <template v-for="(skillObj, index) in skillsArray">
            <v-row
              align="center"
              justify="center"
              :key="skillObj.key"
              class="my-0 py-0"
            >
              <v-tooltip
                right
                :disabled="!skillObj.hint"
                color="green darken-4"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-col
                    cols="6"
                    class="text-right my-0 py-0"
                    v-bind="attrs"
                    v-on="on"
                    ><v-chip color="green darken-4" outlined class="my-2" dark>
                      <v-icon v-if="!!skillObj.mdi" class="mr-2">
                        {{ skillObj.mdi }}</v-icon
                      >
                      {{ skillObj.name }}
                    </v-chip>
                  </v-col>
                </template>
                <span v-if="!!skillObj.hint">{{ skillObj.hint }}</span>
              </v-tooltip>
              <v-col cols="6" class="text-left my-0 py-0">
                <v-rating
                  readonly
                  half-increments
                  color="green darken-4"
                  background-color="green darken-4"
                  length="5"
                  half-icon="mdi-star-half-full"
                  dense
                  :small="$vuetify.breakpoint.smAndDown"
                  :value="skillObj.value"
                ></v-rating>
              </v-col>
            </v-row>
            <v-divider
              v-if="skillObj.divide"
              class="green darken-4 my-2"
              :key="skillObj.key + '-' + index"
            ></v-divider>
          </template>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState([
      'themeColorClass',
      'themeColorText',
      'skillsChipTitleColor',
      'skillsChipBodyColor',
      'skillsC',
      'skillsAc',
      'skillsArray',
      'qualArray',
    ]),
  },
  mounted() {
    this.initSkillsArray();
  },
  methods: {
    ...mapMutations(['setSkillsC', 'setSkillsAc']),
    onSkillsIntersect(entries) {
      this.setSkillsAc(entries[0].isIntersecting);
      this.setSkillsC(entries[0].isIntersecting);
    },
    ...mapActions(['initSkillsArray']),
  },
};
</script>

<style scoped>
.subTitle {
  font-family: 'Franklin Gothic' !important;
}
</style>
