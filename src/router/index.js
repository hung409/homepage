import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/project/smart_factory",
    name: "sub_smartfactory",
    component: () =>
      import("../views/SubSmartfactory.vue")
  },
  {
    path: "/project/android",
    name: "sub_android",
    component: () =>
      import("../views/SubAndroid.vue")
  },
  {
    path: "/study",
    name: "study",
    component: () =>
      import("../views/Study.vue")
  },
  {
    path: "/etc",
    name: "etc",
    component: () =>
      import("../views/Etc.vue")
  },
  {
    path: "/github",
    name: "github",
    component: () =>
      import("../views/Github.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
});

export default router;
