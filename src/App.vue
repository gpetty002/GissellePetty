<template>
  <v-app>
    <mobile-menu class="mobile" v-if="$mq === 'mobile'">
      <mTopNavBar></mTopNavBar>
      <mHomeView></mHomeView>
      <mAboutView></mAboutView>
      <mWorkView></mWorkView>
      <mProjectView></mProjectView>
      <mFooterBar></mFooterBar>
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
import TopNavBar from "./components/TopNavBar.vue";
import FooterBar from "./components/FooterBar.vue";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import WorkView from "./views/WorkView.vue";
import ProjectView from "./views/ProjectView.vue";

import mTopNavBar from "@/components/MobileComponents/mTopNavBar.vue";
import mHomeView from "./views/MobileViews/mHomeView.vue";
import mAboutView from "./views/MobileViews/mAboutView.vue";
import mWorkView from "./views/MobileViews/mWorkView.vue";
import mProjectView from "./views/MobileViews/mProjectView.vue";
import mFooterBar from "./components/MobileComponents/mFooterBar.vue";

export default {
  name: "App",
  components: {
    TopNavBar,
    HomeView,
    AboutView,
    WorkView,
    ProjectView,
    FooterBar,
    mTopNavBar,
    mHomeView,
    mAboutView,
    mWorkView,
    mProjectView,
    mFooterBar,
  },
};
</script>

<style>
.mobile {
  background-color: #3680d0;
  height: 90vh;
}

.desktopHomeHeader::before {
  content: "";
  display: block;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-color: #3680d0;
}
.desktopHomeHeader {
  position: relative;
}
</style>
