import Vue from 'vue';
import VueRouter from 'vue-router';
import goTo from 'vuetify/es5/services/goto';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Tenzin Thabkhae',
      metaTags: [
        {
          name: 'description',
          content: 'The personal web app of Tenzin Thabkhae',
        },
        {
          name: 'og:description',
          content: 'The personal web app of Tenzin Thabkhae',
        },
      ],
    },
  },
  {
    path: '*',
    redirect: '/',
  },
];

/**
function loadComponent(addrString) {
  // takes the address string, aka ID
  // then sets the respective component's value to true

  switch (addrString) {
    case '':
      store.commit('setNameC', true);
      break;
    case '#nav-skills':
      store.commit('setSkillsC', true);
      break;
    case '#nav-experience':
      store.commit('setExpC', true);
      break;
    case '#nav-projects':
      store.commit('setPpC', true);
      break;
    case '#nav-hobby':
      store.commit('setHobbyC', true);
      break;
    default:
      store.commit('setNameC', true);
      break;
  }
}
*/

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;
    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }
    return goTo(scrollTo);
  },
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Tenzin Thabkhae';
  next();
});

export default router;
