// @/main.js
import Vue from 'vue';
import WebFontLoader from 'webfontloader';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

// async load fonts
WebFontLoader.load({
  google: {
    families: ['Open Sans', 'sans-serif'],
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
