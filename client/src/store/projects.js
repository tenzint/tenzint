export default {
  namespaced: true,
  state: {
    projects: [],
  },
  actions: {
    init({ commit }) {
      commit('resetProjects');

      commit('appendProjects', {
        key: 'tenzinhub',
        title: 'Tenzin Hub - Weather and TTC transit',
        img: 'https://tenzint.github.io/projects/tenzinhub-ttc.png',
        desc: 'web app for TTC predictions and weather data in any city in the world',
        points:
          '<li><b>Express.js</b> backend</li>' +
          '<li><b>Nuxt.js / Vue.js</b> frontend</li>' +
          '<li><b>Mongoose</b> and <b>JWT</b> based auth system' +
          '<li>web scrape TTC Official API</li>',
        link: 'https://tenzint.github.io/tenzinhub/',
        github: 'https://github.com/tenzint/tenzinhub',
      });
      commit('appendProjects', {
        key: 'journal',
        title: 'Journal Website',
        img: 'https://tenzint.github.io/projects/tenzinandhobbes.png',
        desc: 'web app for users to publish journals to an online community',
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
        points: '<li><b>Discord.js</b> for bot interaction with discord users',
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
  },
};
