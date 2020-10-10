import Vue from 'vue';
import Vuex from 'vuex';

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
  },
  actions: {
  },
  modules: {
  },
});
