<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      class="navBtn"
      plain
      :color="btnBg"
      :style="{ color: hover ? blueColor : 'black' }"
      >{{ btnName }}</v-btn
    >
  </v-hover>
</template>

<script>
import enums from "../../server/enums/enums";
export default {
  name: "TopNavButton",
  data: () => ({
    blueColor: enums.COLORS.BLUE,
  }),
  props: {
    btnName: String,
  },
};
</script>

<style></style>
