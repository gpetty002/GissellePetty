<template>
  <div class="mProjectView" id="mProject">
    <h3 class="mTitle mProjectTitle bold" style="text-align: center">
      Projects
    </h3>
    <template v-for="(index, i) in myProjects">
      <v-col class="mProjectCards" :key="i" cols="20">
        <mProjectCard :project="index"></mProjectCard>
      </v-col>
    </template>
  </div>
</template>

<script>
import mProjectCard from "@/components/MobileComponents/mProjectCard.vue";
import enums from "../../../server/enums/enums";
export default {
  name: "mProjectView",
  data() {
    return {
      myProjects: enums.PROJECTS,
    };
  },
  components: { mProjectCard },
};
</script>

<style>
.mProjectView {
  padding-bottom: 5vh;
}

.mProjectTitle {
  padding-top: 10vh;
  padding-bottom: 1vh;
}

.mProjectCards {
  padding-bottom: 5vh;
}
</style>
