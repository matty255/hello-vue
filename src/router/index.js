import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/LoginComponent";
import GridSystem from "@/views/GridSystem";
import SignUp from "@/views/SignUp";
import HomeComponent from "@/views/HomeComponent";
import WordMix from "@/views/WordMix";
import ReactionSpeed from "@/views/ReactionSpeed";
import LottoGenerator from "@/views/LottoGenerator";
Vue.use(VueRouter);

const routes = [
  {
    path: "/hello-vue",
    name: "HomeComponent",
    component: HomeComponent,
  },
  {
    path: "/sign-in",
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
  {
    path: "/word-mix",
    name: "WordMix",
    component: WordMix,
  },
  {
    path: "/reaction-speed",
    name: "ReactionSpeed",
    component: ReactionSpeed,
  },
  {
    path: "/lotto-generator",
    name: "LottoGenerator",
    component: LottoGenerator,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
