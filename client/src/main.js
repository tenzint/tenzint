// @/main.js
import Vue from "vue";
import WebFontLoader from "webfontloader";
import * as firebase from "firebase/app";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "firebase/auth";
import "firebase/storage";

const fbConfig = require("@/../hidden/firebaseConfig.json");

// async load fonts
WebFontLoader.load({
  google: {
    families: ["Open Sans", "sans-serif"],
  },
});

Vue.config.productionTip = false;
firebase.initializeApp(fbConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount("#app");
