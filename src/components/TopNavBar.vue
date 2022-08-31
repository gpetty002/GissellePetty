<template>
  <v-app-bar elevation="0" :color="bg" app>
    <v-hover v-slot="{ hover }">
      <v-btn
        class="navBtn"
        plain
        :style="{
          color: hover ? blueColor : isScrolling ? 'white' : 'black',
        }"
        >Gisselle Petty</v-btn
      >
    </v-hover>

    <v-spacer></v-spacer>
    <v-hover v-slot="{ hover }">
      <v-btn
        class="navBtn"
        plain
        href="#homeView"
        :style="{
          color: hover ? blueColor : isScrolling ? 'white' : 'black',
        }"
        >Home</v-btn
      >
    </v-hover>

    <v-hover v-slot="{ hover }">
      <v-btn
        class="navBtn"
        plain
        href="#aboutView"
        :style="{
          color: hover ? blueColor : isScrolling ? 'white' : 'black',
        }"
        >About</v-btn
      >
    </v-hover>

    <v-hover v-slot="{ hover }">
      <v-btn
        class="navBtn"
        plain
        href="#workView"
        :style="{
          color: hover ? blueColor : isScrolling ? 'white' : 'black',
        }"
        >Work</v-btn
      >
    </v-hover>

    <v-hover v-slot="{ hover }">
      <v-btn
        class="navBtn"
        plain
        href="#projectView"
        :style="{
          color: hover ? blueColor : isScrolling ? 'white' : 'black',
        }"
        >Projects</v-btn
      >
    </v-hover>
  </v-app-bar>
</template>

<script>
import enums from "../../server/enums/enums";
export default {
  name: "TopNavBar",
  data: () => ({
    blueColor: enums.COLORS.BLUE,
    bg: undefined,
    btnBg: undefined,
    isScrolling: false,
  }),
  computed: {},
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
        "--color-hover": this.blue,
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
.navBtn:hover {
  color: var(--color-hover);
}
</style>
