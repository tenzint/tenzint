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
          <v-col cols="12" md="8" class="elevation-15 pa-4">
            <h4
              :class="`
                text-heading-5
                text-md-heading-4
                font-weight-bold
                pt-4
                text-center
                ${themeColorText}
              `"
            >
              Tenzin Hub - Weather and TTC transit
            </h4>
            <v-row justify="center" class="my-16">
              <a
                href="https://github.com/tenzint/tenzinhub"
                target="_blank"
                class="aimg"
              >
                <v-img
                  width="40vw"
                  src="https://tenzint.github.io/projects/tenzinhub-ttc.png"
                  contain
                />
              </a>
            </v-row>
            <ul class="text-body-2 text-md-body-1 mx-4">
              <li>
                Developed a RESTful Express.js server that scrapes TTC transit
                XML data and transforms it into readable JSON
              </li>
              <li>
                Developed a decent frontend UI and UX using Nuxt.js modules
              </li>
              <li>
                <span class="text-decoration-underline">Utilized:</span>
                Full-stack, REST Api, Vue.js (+ Nuxt.js), Express.js, Mongoose,
                jsonwebtoken (JWT), bcryptjs, got, web-scraping official TTC API
              </li>
            </ul>
          </v-col>
        </v-row>
        <v-row class="my-4" justify="center">
          <v-col cols="12" md="8" class="elevation-15 pa-4">
            <h4
              :class="`
                text-heading-5
                text-md-heading-4
                font-weight-bold
                pt-4
                text-center
                ${themeColorText}
              `"
            >
              Journal Website
            </h4>
            <v-row justify="center" class="my-16">
              <a
                href="https://tenzinandhobbes.web.app"
                target="_blank"
                class="aimg"
              >
                <v-img
                  width="40vw"
                  src="https://tenzint.github.io/projects/tenzinandhobbes.png"
                  contain
                />
              </a>
            </v-row>
            <ul class="text-body-2 text-md-body-1 mx-4">
              <li>
                Developed a web app using Vue.js that allows users to publish
                and share journals with comments
              </li>
              <li>
                Incorporated firebase as backend for data storage, web hosting
                and authentication
              </li>
              <li>
                Solved Firebase's Google signin error caused by the new
                'sameSite' feature launched by Google in July 2020 by
                implementing Google API's oAuth2 signin. The debugging process
                can be found on my
                <a
                  href="https://stackoverflow.com/questions/63455143/how-to-resolve-rangeerror-maximum-call-stack-size-exceeded-via-firebase-signi"
                  target="_blank"
                  >Stack Overflow</a
                >
                question page.
              </li>
              <li>
                <span class="text-decoration-underline">Utilized:</span>
                Vue.js, Firebase, Google API, moment.js
              </li>
            </ul>
          </v-col>
        </v-row>
        <v-row class="my-4" justify="center">
          <v-col cols="12" md="8" class="elevation-15 pa-4">
            <h4
              :class="`
                text-heading-5
                text-md-heading-4
                font-weight-bold
                pt-4
                text-center
                ${themeColorText}
              `"
            >
              Discord.js mini-projects
            </h4>
            <ul class="text-body-2 text-md-body-1 mx-4">
              <li>
                Created a discord bot that allows users to send commands and
                serves the users via plain texts, MessageEmbeds, images, videos,
                links or audio by using the Node.js package Discord.js
              </li>
              <li>
                Developed a way to notify discord users when a twitch user
                becomes online or offline with 1 minute to 4 minutes delay; by
                creating a server using express.js, requesting a POST subscribe
                to a twitch channel via 'request' to twitch API, resending the
                'hub.challenge' found in query to validate and having a POST
                method ready to get notifications about the channel status.
              </li>
              <li>
                Created a twitch bot that responds to commands in twitch chat
                using 'tmi.js'
              </li>
              <li>
                Established a discord channel that contains only a link with an
                embedded video to the latest video of a youtube channel, updated
                half-hourly, using 'googleapis'-a node.js version of Google API
                service
              </li>
              <li>
                Developed a 'music bot' that accepts youtube links or song
                titles from users; uses 'ytdl-core' from Node.js to get the
                best-matched youtube audio; and 'ffmpeg-static', 'node-opus' and
                'discord.js' to stream the audio to users in a discord voice
                channel. The sound quality is unoptimized.
              </li>
              <li>
                Designed and created card-sized images by using 'canvas' (a
                Node.js package) to produce fresh 2D images with variable texts
                with style, font choice, shadow, and stylish rectangular or
                circular images on demand to discord
              </li>
              <li>
                Developed a simple 'Spyfall' game with randomized spy player and
                location, played through discord messages via a bot using
                Discord.js
              </li>
              <li>
                Developed a simple 'Connect-4' game via bot using discord.js'
                MessageEmbed and discord's in-built *icons* like
                ':large_blue_circle:', ':red_circle:' and ':white_circle:'.
                Incorporated chess-like ELO system by saving elo and user_id
                data to firebase
              </li>
              <li>
                <span class="text-decoration-underline">Utilized:</span>
                Node.js, Express.js, Discord.js, promise, request-promise,
                googleapis, ytdl-core,
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-lazy>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['themeColorText', 'counterThemeColorClass', 'ppC', 'ppAc']),
  },
  methods: {
    ...mapMutations(['setPpC', 'setPpAc']),
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
</style>
