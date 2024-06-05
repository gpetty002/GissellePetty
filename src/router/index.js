import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import WorkView from "../views/WorkView.vue";
import ProjectView from "../views/ProjectView.vue";
import mHomeView from "../views/MobileViews/mHomeView.vue";
import mAboutView from "../views/MobileViews/mAboutView.vue";
import mWorkView from "../views/MobileViews/mWorkView.vue";
import mProjectView from "../views/MobileViews/mProjectView.vue";
import HistoricalStories from "../views/HistoricalStories.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/work",
    name: "work",
    component: WorkView,
  },
  {
    path: "/projects",
    name: "project",
    component: ProjectView,
  },
  {
    path: "/mHome",
    name: "mHome",
    component: mHomeView,
  },
  {
    path: "/mAbout",
    name: "mAbout",
    component: mAboutView,
  },
  {
    path: "/mWork",
    name: "mWork",
    component: mWorkView,
  },
  {
    path: "/mProjects",
    name: "mProject",
    component: mProjectView,
  },
  {
    path: "/historicalStories",
    name: "HistoricalStories",
    component: HistoricalStories,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

// be more specific with stories
// guide what i want from them
// independent study - under special direct study
// meet with alma
// 199 or 198 units
