export default {
  namespaced: true,
  state: {
    projects: [],
    detailed: [],
    pKey: '',
    snapObj: {},
  },
  actions: {
    init({ commit }) {
      commit('resetProjects');
      commit('resetDetailed');
      commit('setPKey', '');
      commit('setSnapObj', {});

      // ---- Appending projects ----
      commit('appendProjects', {
        key: 'tcccscreen',
        title: 'TCCC self-screen',
        img: 'https://tenzint.github.io/projects/tenzinhub-ttc.png',
        desc: 'Web app for self-screening of members and visitors at the Tibetan Canadian Cultural Center',
        points:
          '<li><b>Vue.js</b> frontend</li>',
        link: 'https://tcccscreen.web.app/',
      });
      commit('appendProjects', {
        key: 'tenzinhub',
        title: 'Tenzin Hub - Weather and TTC transit',
        img: 'https://tenzint.github.io/projects/tenzinhub-ttc.png',
        desc: 'Web app for TTC predictions and weather data in any city in the world',
        points:
          '<li><b>Express.js</b> backend</li>' +
          '<li><b>Nuxt.js / Vue.js</b> frontend</li>' +
          '<li><b>Mongoose</b> and <b>JWT</b> based auth system</li>' +
          '<li>web scrape TTC Official API</li>',
        link: 'https://tenzint.github.io/tenzinhub/',
        github: 'https://github.com/tenzint/tenzinhub',
      });
      commit('appendProjects', {
        key: 'journal',
        title: 'Journal Website',
        img: 'https://tenzint.github.io/projects/tenzinandhobbes.png',
        desc: 'Web app for users to publish journals to an online community',
        points:
          '<li><b>Vue.js</b> frontend</li>' +
          '<li><b>Firebase</b> cloud for database, storage, web hosting and authentication</li>',
        link: 'https://tenzinandhobbes.web.app',
      });
      commit('appendProjects', {
        key: 'discord',
        title: 'Discord bots',
        img: 'https://discord.js.org/static/logo.svg',
        desc: 'Experimental discord bots that interact with users via text, embeds, images and videos',
        points:
          '<li><b>Discord.js</b> for bot interaction with discord users</li>',
      });

      // ---- Appending detailed info ----
      commit('appendDetailed', {
        key: 'tenzinhub',
        title: 'Tenzin Hub - Weather and TTC transit',
        points:
          '<li>Developed a RESTful Express.js server that scrapes TTC transit XML data and transforms it into readable JSON</li>' +
          '<li>Developed a decent frontend UI and UX using Nuxt.js modules</li>',
        utilized:
          'Full-stack, REST Api, Vue.js (+ Nuxt.js), Express.js, Mongoose, jsonwebtoken (JWT), bcryptjs, got, web-scraping official TTC API',
      });
      commit('appendDetailed', {
        key: 'journal',
        title: 'Journal Website',
        points:
          '<li>Developed a web app using Vue.js that allows users to publish and share journals with comments</li>' +
          '<li>Incorporated firebase as backend for data storage, web hosting and authentication</li>' +
          "<li>Solved Firebase's Google signin error caused by the new 'sameSite' feature launched by " +
          "Google in July 2020 by implementing Google API's oAuth2 signin. " +
          'The debugging process can be found on my ' +
          '<a href="https://stackoverflow.com/questions/63455143/' +
          'how-to-resolve-rangeerror-maximum-call-stack-size-exceeded-via-firebase-signi" target="_blank" >Stack Overflow</a> ' +
          'question page.</li>',
        utilized: 'Vue.js, Firebase, Google API, moment.js',
      });
      commit('appendDetailed', {
        key: 'discord',
        title: 'Discord.js mini-projects',
        points:
          '<li>Created a discord bot that allows users to send commands and ' +
          'serves the users via plain texts, MessageEmbeds, images, videos, ' +
          'links or audio by using the Node.js package Discord.js</li>' +
          '<li>Developed a way to notify discord users when a twitch user ' +
          'becomes online or offline with 1 minute to 4 minutes delay' +
          '<li>Created a twitch bot that responds to commands in twitch chat ' +
          "using 'tmi.js'</li>" +
          '<li>Established a discord channel that contains only a link with an ' +
          'embedded video to the latest video of a youtube channel, updated ' +
          "half-hourly, using 'googleapis'-a node.js version of Google API service</li>" +
          "<li>Developed a 'music bot' that accepts youtube links or song " +
          "titles from users; uses 'ytdl-core' from Node.js to get the " +
          "best-matched youtube audio; and 'ffmpeg-static', 'node-opus' and " +
          "'discord.js' to stream the audio to users in a discord voice " +
          'channel. The sound quality is unoptimized.</li>' +
          "<li>Designed and created card-sized images by using 'canvas' (a " +
          'Node.js package) to produce fresh 2D images with variable texts ' +
          'with style, font choice, shadow, and stylish rectangular or ' +
          'circular images on demand to discord</li>',
        utilized:
          'Node.js, Express.js, Discord.js, promise, request-promise, googleapis, ytdl-core,',
      });
    },
  },
  mutations: {
    resetProjects(state) {
      state.projects = [];
    },
    appendProjects(state, project) {
      state.projects.push(project);
    },
    resetDetailed(state) {
      state.detailed = [];
    },
    appendDetailed(state, detailed) {
      state.detailed.push(detailed);
    },
    setPKey(state, pkey) {
      state.pKey = pkey;
    },
    setSnapObj(state, obj) {
      state.snapObj = { ...obj };
    },
  },
};
