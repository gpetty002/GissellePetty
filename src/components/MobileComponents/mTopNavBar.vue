<template>
  <v-layout>
    <v-app-bar elevation="0" :color="bg" app flat clipped-left>
      <v-btn plain :style="{ color: isScrolling ? 'white' : 'black' }">
        Gisselle Petty
      </v-btn>

      <div class="mNavHamburgerWrapper">
        <v-btn plain class="mNavHamburger" @click="drawer = !drawer">
          <font-awesome-icon :icon="['fass', 'bars']" />
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      app
      clipped
      flat
      class="mNavDrawer"
      height="100vh"
      absolute
      v-model="drawer"
    >
      <v-list>
        <v-list-item title="Gisselle Petty">
          <v-list-item-avatar>
            <img src="../../assets/santaMonica.png" />
          </v-list-item-avatar>
          Gisselle Petty
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item title="About Me">About Me</v-list-item>
        <v-list-item title="Work Experience">Work Experience</v-list-item>
        <v-list-item title="Projects">Projects</v-list-item>
        <v-list-item title="Resume">Resume</v-list-item>
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
.mNavHamburgerWrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
.mNavHamburger {
  margin-left: 135px;
}

.mNavDrawer {
  padding-top: 7vh;
}
</style>
