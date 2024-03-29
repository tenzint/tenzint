<template>
  <v-container class="white lighten-5 px-4 py-8" fluid>
    <v-row align="center" justify="center" class="my-8">
      <v-col class="text-center">
        <h1
          :class="`
            text-h4
            text-md-h3
            ${themeColorText}
          `"
          id="nav-experience"
        >
          EXPERIENCE
        </h1>
      </v-col>
    </v-row>
    <v-lazy
      :value="expC"
      @input="setExpC"
      :options="{
        rootMargin: '80%',
        threshold: 1,
      }"
      min-height="100vh"
      transition="scroll-y-transition"
      v-intersect="onExpIntersect"
    >
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item large fill-dot :color="themeColorClass">
          <template v-slot:icon>
            <v-avatar>
              <img src="https://tenzint.github.io/favicon.ico" />
            </v-avatar>
          </template>
          <span
            :class="`
            ${themeColorText}
            font-italic
            text-caption
          `"
            slot="opposite"
            >Nov 2019-Present (restarted Sept 23, 2020)</span
          >
          <v-card :color="counterThemeColorClass">
            <v-card-title
              :class="`title
              ${themeColorClass}
              ${counterThemeColorText}
            `"
            >
              Full-stack Developer, Toronto Grace Health Centre
            </v-card-title>

            <v-hover v-slot="{ hover }">
              <v-card-text
                :class="
                  'py-4 ' + counterThemeColorClass + ' ' + { 'on-hover': hover }
                "
              >
                <v-expand-transition>
                  <div v-if="hover">
                    <span
                      :class="`
                      ${themeColorText}
                      font-italic
                      text-caption
                    `"
                      v-if="$vuetify.breakpoint.smAndDown"
                    >
                      Nov 2019-Present (restarted Sept 23, 2020)</span
                    >
                    <ul class="text-body-2 text-md-body-1 mx-4 black--text">
                      <li>
                        Developed a full-stack prototype of ticketing system
                        using Vue.js and Adonis.js for use between nurses and
                        maintenance staff
                      </li>
                      <li>
                        Developed a full-stack web app with automation to web
                        scrape, download and print PDF files from intranet by
                        using Selenium and chokidar
                      </li>
                      <li>
                        Tested and debugged backend API functionalities by
                        proficiently using Postman app
                      </li>
                      <li>
                        Designed and developed intuitive, responsive and
                        reactive UI by writing codes in Vue.js, Vuetify.js, HTML
                        and CSS
                      </li>
                      <li>
                        Secured and shared my source codes with my project
                        manager by using Bitbucket git repository
                      </li>
                      <li>
                        <span class="text-decoration-underline">Utilized:</span>
                        Full-stack web development, RESTful API, Vue.js
                        (+Nuxt.js), Adonis.js, html5, css3, Selenium, git,
                        MySQL, MongoDB (Mongoose), moment.js, chokidar,
                        node-schedule
                      </li>
                    </ul>
                  </div>
                  <div v-else>
                    <ul class="text-body-2 text-md-body-1 mx-4 black--text">
                      <li>
                        <b>Vue.js (VueX, Router, Vuetify), Nuxt.js</b> frontend
                      </li>
                      <li><b>Adonis.js</b> backend</li>
                      <li><b>Selenium</b> browser automation</li>
                      <li><b>Postman</b> API testing</li>
                      <li><b>Bitbucket</b> git repository</li>
                    </ul>
                  </div>
                </v-expand-transition>
              </v-card-text>
            </v-hover>
          </v-card>
        </v-timeline-item>
        <v-timeline-item large fill-dot :color="themeColorClass">
          <template v-slot:icon>
            <v-avatar>
              <img src="https://tenzint.github.io/uoft.png" />
            </v-avatar>
          </template>
          <span
            :class="`
            ${themeColorText}
            font-italic
            text-caption
          `"
            slot="opposite"
            >Spring 2018</span
          >
          <v-card :color="themeColorClass" :class="counterThemeColorText">
            <v-card-title class="title">
              Front-end Developer, ECE496 Capstone Project, UofT
            </v-card-title>
            <v-hover v-slot="{ hover }">
              <v-card-text
                :class="`
              ${counterThemeColorClass}
              black--text
              py-4
            `"
              >
                <v-expand-transition>
                  <div v-if="hover">
                    <span
                      :class="`
              ${themeColorText}
              font-italic
              text-caption
            `"
                      v-if="$vuetify.breakpoint.smAndDown"
                      >Spring 2018</span
                    >
                    <ul class="text-body-2 text-md-body-1 mx-4">
                      <li>
                        Developed a way for users to share their notes and
                        highlights with their friends by writing Vue.js codes
                        and features such as watchers and event handlers
                      </li>
                      <li>
                        Spearheaded firebase by creating a firebase project,
                        setting it up, sharing ownership with my team and
                        solving team’s problems regarding any firebase code
                      </li>
                      <li>
                        Researched and documented the initial project proposal,
                        Gantt charts, progress reports, UML design diagram, my
                        individual presentation speech and the final report
                      </li>
                      <li>
                        <span class="text-decoration-underline">Utilized:</span>
                        Iterative development, Vue.js, Firebase, PDF.js
                      </li>
                    </ul>
                  </div>
                  <div v-else>
                    <p class="text-body-2 text-md-body-1 my-0">
                      <span class="text-decoration-underline pr-4">
                        Divvyy: eTextbook Platform and Peer Collaboration
                      </span>
                      <v-btn
                        href="https://ece496-etext.firebaseapp.com"
                        target="_blank"
                        :class="`
                          ${counterThemeColorText}
                          mb-4
                        `"
                        :color="themeColorClass"
                        >Link</v-btn
                      >
                    </p>
                    <ul class="text-body-2 text-md-body-1 mx-4 black--text">
                      <li><b>Vue.js (VueX, Router, Vuetify)</b> frontend</li>
                      <li>
                        <b
                          >Firebase (authentication, web host, real-time
                          database)</b
                        >
                        BaaS cloud
                      </li>
                      <li><b>PDF.js</b> package utilized</li>
                      <li><b>Bitbucket</b> git repository</li>
                    </ul>
                  </div>
                </v-expand-transition>
              </v-card-text>
            </v-hover>
          </v-card>
        </v-timeline-item>
        <v-timeline-item large fill-dot :color="themeColorClass">
          <template v-slot:icon>
            <v-avatar>
              <img src="https://tenzint.github.io/uoft.png" />
            </v-avatar>
          </template>
          <span
            :class="`
            ${themeColorText}
            font-italic
            text-caption
          `"
            slot="opposite"
            >Fall 2017</span
          >
          <v-card :color="themeColorClass" :class="counterThemeColorText">
            <v-card-title class="title">
              Full-stack Developer, Software Engineering Project, UofT
            </v-card-title>
            <v-hover v-slot="{ hover }">
              <v-card-text
                :class="`
              ${counterThemeColorClass}
              black--text
              py-4
            `"
              >
                <v-expand-transition>
                  <div v-if="hover">
                    <span
                      :class="`
              ${themeColorText}
              font-italic
              text-caption
            `"
                      v-if="$vuetify.breakpoint.smAndDown"
                      >Fall 2017</span
                    >
                    <ul class="text-body-2 text-md-body-1 mx-4">
                      <li>
                        Developed a full stack of ‘jobs resource’ using Ruby and
                        Rails, bootstrap, SQLite and html to allow clients to
                        create jobs for teenagers to serve
                      </li>
                      <li>
                        Brainstormed feature ideas and reported progress by
                        collaborating weekly with a team of seven that conforms
                        to the agile development model
                      </li>
                      <li>
                        <span class="text-decoration-underline">Utilized:</span>
                        Ruby on Rails, SQLite, RESTful API, html, css, bootstrap
                      </li>
                    </ul>
                  </div>
                  <div v-else>
                    <p class="text-body-2 text-md-body-1 my-0">
                      <span class="text-decoration-underline pr-4"
                        >TeenSrv</span
                      >
                      <v-btn
                        href="https://github.com/alexkch/TeenSrv"
                        target="_blank"
                        :class="`
                          ${counterThemeColorText}
                          mb-4
                        `"
                        :color="themeColorClass"
                        >Link</v-btn
                      >
                    </p>
                    <ul class="text-body-2 text-md-body-1 mx-4 black--text">
                      <li><b>Ruby on Rails</b> full-stack</li>
                      <li><b>SQLite</b> database</li>
                      <li><b>Bootstrap</b> UI design</li>
                    </ul>
                  </div>
                </v-expand-transition>
              </v-card-text>
            </v-hover>
          </v-card>
        </v-timeline-item>
        <v-timeline-item large fill-dot :color="themeColorClass">
          <template v-slot:icon>
            <v-avatar>
              <img src="https://tenzint.github.io/tccc-logo.png" />
            </v-avatar>
          </template>
          <span
            :class="`
            ${themeColorText}
            font-italic
            text-caption
          `"
            slot="opposite"
            >2015</span
          >
          <v-card :color="themeColorClass" :class="counterThemeColorText">
            <v-card-title class="title">
              Membership Portal Developer, Tibetan Canadian Cultural Center
            </v-card-title>
            <v-hover v-slot="{ hover }">
              <v-card-text
                :class="`
              ${counterThemeColorClass}
              black--text
              py-4
            `"
              >
                <v-expand-transition>
                  <div v-if="hover">
                    <span
                      :class="`
              ${themeColorText}
              font-italic
              text-caption
            `"
                      v-if="$vuetify.breakpoint.smAndDown"
                      >2015</span
                    >
                    <ul class="text-body-2 text-md-body-1 mx-4">
                      <li>
                        Helped membership team get online from offline excel by
                        facilitating members in inserting, querying and updating
                        membership data by writing meaningful php and PDO code
                        connecting to MySQL database
                      </li>
                      <li>
                        <span class="text-decoration-underline">Utilized:</span>
                        php, PDO, html, css, javascript, MySQL
                      </li>
                    </ul>
                  </div>
                  <div v-else>
                    <ul class="text-body-2 text-md-body-1 mx-4 black--text">
                      <li><b>Vue.js</b> frontend</li>
                      <li><b>MySQL</b> database</li>
                      <li>HTML, CSS</li>
                      <li><b>php (PDO)</b> web programming</li>
                    </ul>
                  </div>
                </v-expand-transition>
              </v-card-text>
            </v-hover>
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
    ...mapMutations(['setExpC', 'setExpAc']),
    onExpIntersect(entries) {
      this.setExpAc(entries[0].isIntersecting);
      /*
      this.setExpC(
        entries[0]
          .isIntersecting,
      );
      */
    },
  },
};
</script>

<style scoped>
/* v-card-title breaks words down to letters, fix*/
.v-card__text,
.v-card__title {
  word-break: normal;
  font-family: 'Franklin Gothic' !important;
}
</style>
