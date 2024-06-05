import Vue from "vue";
import HistoricalStories from "./views/HistoricalStories.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueMq from "vue-mq";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, far, fab);

Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(HistoricalStories),
}).$mount("#historicalStories");
