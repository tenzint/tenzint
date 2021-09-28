export default {
  namespaced: true,
  state: {
    projects: [],
  },
  actions: {
    init({ commit }) {
      commit('resetProjects');

      commit('appendSkillsArray', {
        key: 'tenzinhub',
        title: 'Tenzin Hub - Weather and TTC transit',
        img: 'https://tenzint.github.io/projects/tenzinhub-ttc.png',
        desc: '',
        link: 'https://tenzint.github.io/tenzinhub/',
        github: 'https://github.com/tenzint/tenzinhub',
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
