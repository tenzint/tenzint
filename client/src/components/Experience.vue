<template>
  <v-container
    class="
      green
      lighten-5
      px-4
      py-8
    "
    fluid
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
          id="nav-experience"
        >Relevant Experience</h1>
      </v-col>
    </v-row>
    <v-lazy
      :value="expC"
      @input="setExpC"
      :options="{
        threshold: .5
      }"
      min-height="100vh"
      v-intersect="onExpIntersect"
    >
    <v-timeline
      align-top
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        large
        fill-dot
        :color="themeColorClass"
      >
        <template v-slot:icon>
          <v-avatar>
            <img src="https://salvationarmy.ca/wp-content/uploads/2017/10/cropped-site-icon-512.png">
          </v-avatar>
        </template>
        <span
          :class="`
            ${themeColorText}
            font-italic
            text-caption
          `"
          slot="opposite"
        >Nov 2019-March 2020</span>
        <v-card
          :color="themeColorClass"
          :class="counterThemeColorText"
        >
          <v-card-title
            class="title"
          >
          Web Development Volunteer, Toronto Grace Hospital
          </v-card-title>
          <v-card-text
            :class="`
              py-4
              ${counterThemeColorClass}
            `"
          >
            <span
              :class="`
                ${themeColorText}
                font-italic
                text-caption
              `"
              v-if="$vuetify.breakpoint.smAndDown"
            >Nov 2019-March 2020</span>
            <ul
              class="
                text-body-2
                text-md-body-1
                mx-4
                black--text
              "
            >
              <li><span class="text-decoration-underline">Utilized:</span>
                Vue.js, Adonis.js, html5, css3,
              Selenium, git, MySQL, MongoDB, moment.js, Chokidar, node-schedule</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item
        large
        fill-dot
        :color="themeColorClass"
      >
        <template v-slot:icon>
          <v-avatar>
            <img src="https://zhuoyuelyu.github.io/index_files/1.png">
          </v-avatar>
        </template>
        <span
          :class="`
            ${themeColorText}
            font-italic
            text-caption
          `"
          slot="opposite"
        >Spring 2018</span>
        <v-card
          :color="themeColorClass"
          :class="counterThemeColorText"
        >
          <v-card-title
            class="title"
          >
          Team member, ECE496 Capstone Project, UofT
          </v-card-title>
          <v-card-text
            :class="`
              ${counterThemeColorClass}
              black--text
              py-4
            `"
          >
          <span
            :class="`
              ${themeColorText}
              font-italic
              text-caption
            `"
            v-if="$vuetify.breakpoint.smAndDown"
          >Spring 2018</span>
        <p class="text-body-2
          text-md-body-1
          my-0
        ">
          <span
            class="text-decoration-underline
            pr-4"
          >
          Divvyy: eTextbook Platform and Peer Collaboration</span>
          <v-btn
            href="https://ece496-etext.firebaseapp.com"
            target="_blank"
            :class="`
              ${counterThemeColorText}
              mb-4
            `"
            :color="themeColorClass"
          >
          Link
          </v-btn>
        </p>
        <ul class="text-body-2
          text-md-body-1
          mx-4"
        >
          <li>Developed a way for users to share their notes and highlights with their friends by
          writing Vue.js codes and features such as watchers and event handlers</li>
          <li>Spearheaded firebase by creating a firebase project, setting it up,
          sharing ownership with my team and solving team’s
          problems regarding any firebase code</li>
          <li>Researched and documented the initial project proposal, Gantt charts,
          progress reports,
          UML design diagram, my individual presentation speech and the final report</li>
          <li>
            <span class="text-decoration-underline"
            >Utilized:</span>
            Iterative development, Vue.js, Firebase, PDF.js
            </li>
          </ul>
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item
        large
        fill-dot
        :color="themeColorClass"
      >
        <template v-slot:icon>
          <v-avatar>
            <img src="https://zhuoyuelyu.github.io/index_files/1.png">
          </v-avatar>
        </template>
        <span
          :class="`
            ${themeColorText}
            font-italic
            text-caption
          `"
          slot="opposite"
        >Fall 2017</span>
        <v-card
          :color="themeColorClass"
          :class="counterThemeColorText"
        >
          <v-card-title
            class="title"
          >Team member, Software Engineering Project, UofT
          </v-card-title>
          <v-card-text
            :class="`
              ${counterThemeColorClass}
              black--text
              py-4
            `"
          >
          <span
            :class="`
              ${themeColorText}
              font-italic
              text-caption
            `"
            v-if="$vuetify.breakpoint.smAndDown"
          >Fall 2017</span>
        <p class="text-body-2
          text-md-body-1
          my-0
        ">
          <span
            class="text-decoration-underline
            pr-4"
          >
          TeenSrv</span>
          <v-btn
            href="https://github.com/alexkch/TeenSrv"
            target="_blank"
            :class="`
              ${counterThemeColorText}
              mb-4
            `"
            :color="themeColorClass"
          >
          Link</v-btn>
        </p>
        <ul class="text-body-2
          text-md-body-1
          mx-4"
        >
          <li>Developed a full stack of ‘jobs resource’ using Ruby and Rails, bootstrap,
          SQLite and html to allow clients to
          create jobs for teenagers to serve</li>
          <li>Brainstormed feature ideas and reported progress by
          collaborating weekly with a team of seven that
          conforms to the agile development model</li>
          <li><span class="text-decoration-underline">Utilized:</span>
            Ruby on Rails, SQLite, RESTful API, html, css, bootstrap</li>
        </ul>
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item
        large
        fill-dot
        :color="themeColorClass"
      >
        <template v-slot:icon>
          <v-avatar>
            <img src="https://www.tcccgc.org/wp-content/uploads/2016/04/logo.png">
          </v-avatar>
        </template>
        <span
          :class="`
            ${themeColorText}
            font-italic
            text-caption
          `"
          slot="opposite"
        >2015</span>
        <v-card
          :color="themeColorClass"
          :class="counterThemeColorText"
        >
          <v-card-title
            class="title"
          >Membership Portal Developer Volunteer, Tibetan
          Canadian Cultural Center
          </v-card-title>
          <v-card-text
            :class="`
              ${counterThemeColorClass}
              black--text
              py-4
            `"
          >
          <span
            :class="`
              ${themeColorText}
              font-italic
              text-caption
            `"
            v-if="$vuetify.breakpoint.smAndDown"
          >2015</span>
          <ul class="text-body-2
            text-md-body-1
            mx-4"
          >
            <li>Helped membership team get online from offline excel by
            facilitating members in inserting, querying and updating membership data
            by writing meaningful php and PDO code connecting to MySQL database</li>
            <li><span class="text-decoration-underline">Utilized:</span>
              php, PDO, html, css, javascript, MySQL</li>
          </ul>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    </v-lazy>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState([
      'themeColorClass',
      'themeColorText',
      'counterThemeColorClass',
      'counterThemeColorText',
      'expC',
      'expAc',
    ]),
  },
  methods: {
    ...mapMutations([
      'setExpC',
      'setExpAc',
    ]),
    onExpIntersect(entries) {
      this.setExpAc(entries[0].isIntersecting);
      this.setExpC(entries[0].isIntersecting);
    },
  },
};
</script>

<style scoped>
  /* v-card-title breaks words down to letters, fix*/
  .v-card__text, .v-card__title {
    word-break: normal; /* maybe !important  */
  }
</style>