import Vue from 'vue';
import Vuex from 'vuex';
import projects from '@/store/projects';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    themeColor: '#33691E',
    themeColorText: 'light-green--text text--darken-4',
    themeColorClass: 'light-green darken-4',
    counterThemeColorText: 'pink--text text--lighten-5',
    counterThemeColorClass: 'pink lighten-5',
    skillsChipTitleColor: 'grey lighten-3',
    skillsChipBodyColor: 'grey lighten-2',
    skillsArray: [],
    qualArray: [],
    // lazy loading states below
    nameC: true,
    skillsC: false,
    expC: false,
    ppC: false,
    hobbyC: false,
    // nav list-item active input-value below
    nameAc: false,
    skillsAc: false,
    expAc: false,
    ppAc: false,
    hobbyAc: false,
    // style object for Name.vue component
    nameStyle: { minHeight: '100vh' },
    // layout drawer
    drawer: false,
    activateDrawer: false,
  },
  mutations: {
    setNameC(state, val) {
      state.nameC = val;
    },
    setSkillsC(state, val) {
      state.skillsC = val;
    },
    setExpC(state, val) {
      state.expC = val;
    },
    setPpC(state, val) {
      state.ppC = val;
    },
    setHobbyC(state, val) {
      state.hobbyC = val;
    },
    setNameAc(state, val) {
      state.nameAc = val;
    },
    setSkillsAc(state, val) {
      state.skillsAc = val;
    },
    setExpAc(state, val) {
      state.expAc = val;
    },
    setPpAc(state, val) {
      state.ppAc = val;
    },
    setHobbyAc(state, val) {
      state.hobbyAc = val;
    },
    setNameStyle(state, styleArray) {
      state.nameStyle = styleArray;
    },
    setDrawer(state, value) {
      state.drawer = value;
    },
    setActivateDrawer(state, value) {
      state.activateDrawer = value;
    },
    resetSkillsArray(state) {
      state.skillsArray = [];
    },
    appendSkillsArray(state, sObj) {
      state.skillsArray.push(sObj);
    },
    resetQualArray(state) {
      state.qualArray = [];
    },
    appendQualArray(state, sObj) {
      state.qualArray.push(sObj);
    },
  },
  actions: {
    initSkillsArray({ commit }) {
      commit('resetSkillsArray');
      commit('resetQualArray');

      // ----- Instantiating skills array (software skill ratings) -------
      commit('appendSkillsArray', {
        mdi: 'mdi-language-html5',
        name: 'HTML',
        key: 'html',
        value: 4,
      });
      commit('appendSkillsArray', {
        mdi: 'mdi-language-css3',
        name: 'CSS',
        key: 'css',
        value: 4,
      });
      commit('appendSkillsArray', {
        mdi: 'mdi-vuetify',
        name: 'Vue.js',
        key: 'vue',
        value: 4.5,
        hint: 'Vue Router, VueX store, Vuetify',
      });
      commit('appendSkillsArray', {
        mdi: 'mdi-nodejs',
        name: 'Node.js',
        key: 'node',
        value: 4.5,
      });
      commit('appendSkillsArray', {
        mdi: 'mdi-nodejs',
        name: 'Express.js',
        key: 'express',
        value: 4,
      });
      commit('appendSkillsArray', {
        mdi: 'mdi-git',
        name: 'Git',
        key: 'git',
        value: 5,
        divide: true,
      });
      commit('appendSkillsArray', {
        mdi: 'mdi-database-search',
        name: 'SQL',
        key: 'sql',
        value: 3.5,
        hint: 'MySQL, PostGre, SQLite2, ORM',
      });
      commit('appendSkillsArray', {
        mdi: 'mdi-leaf',
        name: 'MongoDB',
        key: 'mongodb',
        value: 3.5,
        divide: true,
      });
      commit('appendSkillsArray', {
        mdi: 'mdi-firebase',
        name: 'Firebase',
        key: 'firebase',
        value: 5,
        hint: 'Real-time database, authentication, hosting, storage',
      });

      // ----------------------- instantiating qualities ratings ------------------------------

      commit('appendQualArray', {
        mdi: 'mdi-rotate-right',
        name: 'Agile',
        key: 'agile',
        value: 4,
        hint: 'Agile Development model',
      });
      commit('appendQualArray', {
        mdi: 'mdi-desktop-classic',
        name: 'OOP',
        key: 'oop',
        value: 4,
        hint: 'Object-oriented programming',
      });
      commit('appendQualArray', {
        mdi: 'mdi-dna',
        name: 'REST',
        key: 'rest',
        value: 4,
        hint: 'Representational State Transfer concept',
      });
      commit('appendQualArray', {
        mdi: 'mdi-monitor-cellphone',
        name: 'Responsive',
        key: 'responsive',
        value: 4.5,
      });
    },
  },
  modules: {
    projects,
  },
});
