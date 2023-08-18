<template>
  <v-layout>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1"
    />
    <v-app-bar elevation="0" :color="bg" class="mobileNavBar" app>
      <v-btn plain :style="{ color: isScrolling ? 'white' : 'black' }">
        Gisselle Petty
      </v-btn>

      <div class="mNavHamburgerWrapper">
        <v-btn
          plain
          :style="{ color: isScrolling ? 'white' : 'black' }"
          class="mNavHamburger"
          @click="drawer = !drawer"
        >
          <font-awesome-icon :icon="['fass', 'bars']" />
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      app
      clipped
      flat
      class="mNavDrawer"
      height="105vh"
      fixed
      v-model="drawer"
    >
      <v-list>
        <v-list-item href="#mHome" title="Gisselle Petty">
          <v-list-item-avatar>
            <img src="../../assets/santaMonica.png" />
          </v-list-item-avatar>
          Gisselle Petty
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item @click="drawer = !drawer" href="#mAbout" title="About Me"
          >About Me</v-list-item
        >
        <v-list-item
          @click="drawer = !drawer"
          href="#mWork"
          title="Work Experience"
          >Work Experience</v-list-item
        >
        <v-list-item @click="drawer = !drawer" href="#mProject" title="Projects"
          >Projects</v-list-item
        >
        <v-list-item
          @click="drawer = !drawer"
          href="GissellePettyResume.pdf"
          download
          title="Resume"
          >Resume</v-list-item
        >
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import enums from "../../../server/enums/enums";

export default {
  name: "mTopNavBar",
  data: () => ({
    blueColor: enums.COLORS.BLUE,
    bg: undefined,
    btnBg: undefined,
    isScrolling: false,
    drawer: null,
  }),
  components: {},
  methods: {
    changeColor() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.bg = "black";
        this.btnBg = "white";
        this.isScrolling = true;
      } else {
        this.isScrolling = false;
        this.bg = "white";
        this.btnBg = "black";
      }
    },
    styleButton() {
      return {
        "--color-active": this.blueColor,
      };
    },
  },
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
};
</script>

<style>
.mobileNavBar {
  position: fixed;
  -webkit-backface-visibility: hidden;
}
.mNavHamburgerWrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
.mNavHamburger {
  margin-left: 135px;
}
</style>
