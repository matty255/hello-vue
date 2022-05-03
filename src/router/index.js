import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/DashBoard";
import GridSystem from "@/views/GridSystem";
import SignUp from "@/views/SignUp";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/grid-system",
    name: "GridSystem",
    component: GridSystem,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
