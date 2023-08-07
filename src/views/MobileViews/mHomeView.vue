<template>
  <div class="mHome">
    <mTopNavBar></mTopNavBar>
    <mHomeText></mHomeText>
  </div>
</template>

<script>
import mTopNavBar from "@/components/MobileComponents/mTopNavBar.vue";
import mHomeText from "@/components/MobileComponents/mHomeText.vue";
export default {
  name: "mHomeView",
  data: () => ({}),
  components: {
    mTopNavBar,
    mHomeText,
  },
  computed: {},
  methods: {},
};
</script>

<style></style>
