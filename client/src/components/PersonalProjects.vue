<template>
  <v-container
    class="grey lighten-2 indigo--text text--darken-2
    px-4 py-8"
    fluid
  >
    <v-row
      align="center"
      justify="center">
      <v-col
        class="text-center"
      >
        <h1 class="text-h4 text-md-h3
          indigo--text
          text--darken-4
          "
          id="nav-projects"
        >Personal Projects</h1>
      </v-col>
    </v-row>
    <v-row
      class="mx-4"
    >
      <v-col
        cols="12"
      >
        <h4 class="text-heading-5 text-md-heading-4
          font-weight-bold
          green--text
          text--darken-3
        ">Journal Website
        (<a href="https://www.tenzinandhobbes.web.app" target="_blank">https://www.tenzinandhobbes.web.app</a>)</h4>
        <ul class="text-body-2
          text-md-body-1
          mx-4"
        >
          <li>Developed a web app using Vue.js that allows users to publish and share journals</li>
          <li>Incorporated firebase as backend for data storage, web hosting and authentication</li>
          <li><span class="text-decoration-underline">Utilized:</span>
            Vue.js, Firebase</li>
        </ul>
      </v-col>
    </v-row>
    <v-row
      class="mx-4"
    >
      <v-col
        cols="12"
      >
        <h4 class="text-heading-5 text-md-heading-4
          font-weight-bold
          green--text
          text--darken-3
        ">Discord.js mini-projects</h4>
        <ul class="text-body-2
          text-md-body-1
          mx-4"
        >
          <li>Created a discord bot that allows users to send commands and serves
          the users via plain texts,
          MessageEmbeds, images, videos, links or audio by using the Node.js package Discord.js</li>
          <li>
            Developed a way to notify discord users when a twitch user becomes online or
            offline with 1 minute to 4 minutes delay; by creating a server using express.js,
            requesting a POST subscribe to a twitch channel via 'request' to twitch API,
            resending the 'hub.challenge'
            found in query to validate and having a POST method ready to get notifications
            about the channel status.</li>
          <li>Created a twitch bot that responds to
            commands in twitch chat using 'tmi.js'
          </li>
          <li>Established a discord channel that contains only a link with an embedded
          video to the latest video of a youtube
          channel, updated half-hourly, using 'googleapis'-a node.js
          version of Google API service</li>
          <li>Developed a 'music bot' that accepts youtube links or song titles from users;
          uses 'ytdl-core' from Node.js to get the best-matched youtube audio; and
          'ffmpeg-static', 'node-opus' and 'discord.js'
          to stream the audio to users in a discord voice channel. The sound quality is unoptimized.
          </li>
          <li>Designed and created card-sized images by using 'canvas' (a Node.js package)
          to produce
          fresh 2D images with variable texts with
          style, font choice, shadow, and stylish rectangular or circular images
          on demand to discord
          </li>
          <li>Developed a simple 'Spyfall' game with randomized spy player and location,
          played through discord messages via a bot using Discord.js</li>
          <li>Developed a simple 'Connect-4'
          game via bot using discord.js'
          MessageEmbed and discord's in-built *icons* like
          ':large_blue_circle:', ':red_circle:' and ':white_circle:'.
          Incorporated chess-like ELO system by
          saving elo and user_id data to firebase
          </li>
          <li><span class="text-decoration-underline">Utilized:</span>
            Node.js, Express.js, Discord.js, promise, request-promise, googleapis, ytdl-core, </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

};
</script>

<style>

</style>