<template>
  <v-app>
    <mobile-menu v-if="$mq === 'mobile'">
      <h1>I am on mobile</h1>
    </mobile-menu>
    <div v-else class="desktop">
      <div class="desktopHomeHeader" id="homeView">
        <TopNavBar></TopNavBar>
        <HomeView></HomeView>
      </div>
      <AboutView></AboutView>
      <WorkView></WorkView>
      <ProjectView></ProjectView>
      <FooterBar></FooterBar>
    </div>
  </v-app>
</template>

<script>
import TopNavBar from "@/components/TopNavBar.vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import WorkView from "./views/WorkView.vue";
import ProjectView from "./views/ProjectView.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  name: "App",
  components: {
    TopNavBar,
    HomeView,
    AboutView,
    WorkView,
    ProjectView,
    FooterBar,
  },
};
</script>

<style>
.desktopHomeHeader::before {
  content: "";
  display: block;
  width: 100%;
  height: 100vh;
  background-size: cover;
  /* background-image: url("@/assets/victoryHike.png"); */
  /* filter: blur(8px); */
  /* background-color: rgba(0, 0, 0, 0.537); */
  background-color: #3680d0;
}
.desktopHomeHeader {
  position: relative;
}
</style>
