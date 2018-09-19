import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import firebase auth();
import { auth } from "./helpers/firebase.service.js";

let app;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next("/login");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

// eslint-disable-next-line
auth.onAuthStateChanged(function () {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
