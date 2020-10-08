<template>
  <v-container
    class="
      grey
      lighten-4
      black--text
      px-4 py-8
    "
    fluid
    id="hobby-container"
  >
    <v-row
      align="center"
      justify="center">
      <v-col
        class="text-center"
      >
        <h1
          :class="`
            text-h4
            text-md-h3
            ${themeColorText}
          `"
          id="nav-hobby"
        >Hobbies</h1>
      </v-col>
    </v-row>
    <v-lazy
      :value="hobbyC"
      @input="setHobbyC"
      :options="{
        rootMargin: '20%',
        threshold: 1,
      }"
      min-height="100vh"
      transition='slide-y-reverse-transition'
      v-intersect="onHobbyIntersect"
    >
    <v-row
      justify="center"
    >
      <v-col
        cols="10"
        md="8"
      >
        <v-card
          class="elevation-20">
          <v-tabs
            v-model="tab"
            :background-color="counterThemeColorClass"
            :color="themeColorClass"
            grow
            @change="resetTab"
          >
            <v-tabs-slider></v-tabs-slider>
            <v-tab
              key="table-tennis"
            >
              <v-icon left>mdi-table-tennis</v-icon>
              Table Tennis
            </v-tab>
            <v-tab
              key="chess"
            >
              <v-icon left>mdi-chess-queen</v-icon>
              Chess
            </v-tab>
          </v-tabs>

          <v-tabs-items
            v-model="tab"
          >
            <v-tab-item
              key="table-tennis"
            >
              <v-card flat>
                <v-card-text
                  :class="`
                    ${counterThemeColorClass}
                    grey--text text--darken-4
                  `"
                >
                  <transition name="fade" mode="out-in">
                    <component
                      :is="viewTableTennis"
                    ></component>
                  </transition>
                  <v-btn
                    :color="themeColorText"
                    @click="toggleTableTennis"
                  >
                    <span v-if="tabletennisSummary">More </span>
                    <span v-if="!tabletennisSummary">Less </span>
                    -details...
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item
              key="chess"
            >
              <v-card flat>
                <v-card-text
                  :class="`
                    ${counterThemeColorClass}
                    grey--text text--darken-4
                  `"
                >
                  <transition name="fade" mode="out-in">
                    <component
                      :is="viewChess"
                    ></component>
                  </transition>
                  <v-btn
                    :color="themeColorText"
                    @click="toggleChess"
                  ><span v-if="chessSummary">
                  More </span>
                  <span v-else>Less </span>
                  -details...
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

const ChessMore = () => import('@/components/ChessMore.vue');
const ChessLess = () => import('@/components/ChessLess.vue');
const TableTennisMore = () => import('@/components/TableTennisMore.vue');
const TableTennisLess = () => import('@/components/TableTennisLess.vue');
export default {
  components: {
    TableTennisLess,
    TableTennisMore,
    ChessLess,
    ChessMore,
  },
  data() {
    return {
      tab: false,
      tabletennisSummary: true,
      chessSummary: true,
      viewChess: ChessLess,
      viewTableTennis: TableTennisLess,
    };
  },
  computed: {
    ...mapState([
      'themeColorClass',
      'themeColorText',
      'counterThemeColorClass',
      'counterThemeColorText',
      'hobbyC',
      'hobbyAc',
    ]),
  },
  methods: {
    ...mapMutations([
      'setHobbyC',
      'setHobbyAc',
    ]),
    onHobbyIntersect(entries) {
      this.setHobbyAc(entries[0].isIntersecting);
      this.setHobbyC(entries[0].isIntersecting);
    },
    toggleChess() {
      this.chessSummary = !this.chessSummary;
      if (this.chessSummary) {
        this.viewChess = ChessLess;
      } else {
        this.viewChess = ChessMore;
      }
    },
    toggleTableTennis() {
      this.tabletennisSummary = !this.tabletennisSummary;
      if (this.tabletennisSummary) {
        this.viewTableTennis = TableTennisLess;
      } else {
        this.viewTableTennis = TableTennisMore;
      }
    },
    resetTab() {
      this.chessSummary = true;
      this.tabletennisSummary = true;
      this.viewChess = ChessLess;
      this.viewTableTennis = TableTennisLess;
    },
  },
};
</script>

<style scoped>
  a, a:link, a:visited {
    color: #33691E;
    text-decoration: underline;
  }
  a:hover {
    color: #33691E;
    text-decoration: underline;
    font-weight: bold;
    font-size: 16px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
