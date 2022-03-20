import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"; // 引入 Home页面组件
import Login from "../views/Login.vue";

// 注册路由插件
Vue.use(VueRouter);

//
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
