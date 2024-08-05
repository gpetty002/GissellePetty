import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueMq from "vue-mq";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueLazyload from "vue-lazyload";

library.add(fas, far, fab);

Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "../src/assets/error.jpeg",
  loading: "../src/assets/loading.gif",
  attempt: 1,
});

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
  render: (h) => h(App),
}).$mount("#app");
