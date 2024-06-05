<template>
  <div class="historicalStories">
    <hTopNavBar></hTopNavBar>
    <hHome></hHome>
  </div>
</template>

<script>
import hTopNavBar from "@/components/Historical/hTopNavBar.vue";
import hHome from "@/components/Historical/Home/hHome.vue";
export default {
  name: "HistoricalStories",
  components: {
    hTopNavBar,
    hHome,
  },
  data() {
    return {};
  },
};
</script>

<style>
.title {
  color: black;
  font-size: 40;
}
</style>
