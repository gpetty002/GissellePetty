<template>
  <div class="mobileWork" id="mWork">
    <h3 class="mobileWorkTitle mTitle" style="text-align: center">
      Work <span class="bold luckyBlueText">Experience</span>
    </h3>
    <v-row>
      <template v-for="(job, i) in myJobs">
        <v-col class="mobileWorkList" cols="12" md="4" :key="i">
          <mWorkCard :job="job"></mWorkCard>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
import enums from "../../../server/enums/enums";
import mWorkCard from "@/components/MobileComponents/mWorkCard.vue";
export default {
  name: "mWorkView",
  data() {
    return {
      myJobs: enums.JOBS,
    };
  },
  components: { mWorkCard },
};
</script>

<style>
.mobileWorkTitle {
  padding-top: 10vh;
}
.mobileWork {
  padding-bottom: 10vh;
}
</style>
