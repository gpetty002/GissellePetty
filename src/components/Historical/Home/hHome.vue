<template>
  <div class="homeContainer">
    <v-img class="homeImg" src="@/assets/historical/mayantemple1.jpeg"> </v-img>
    <h3 class="homeTitle">Let's learn about the past</h3>
  </div>
</template>

<script>
export default {
  name: "hHome",
  data: () => ({
    image: "/Users/gissellepetty/Desktop/my_website/src/assets/cBoard.png",
  }),
};
</script>

<style>
.homeContainer {
}
.homeImg {
  width: 200;
  height: 200;
}
.homeTitle {
  color: black;
  padding-top: 100px;
}
</style>
