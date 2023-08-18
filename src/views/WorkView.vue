<template>
  <div class="work" id="workView">
    <h3 class="workTitle">
      Work <span class="bold luckyBlueText">Experience</span>
    </h3>
    <hr class="workBorder" />
    <v-row class="fill-height" justify="center">
      <template v-for="(job, i) in myJobs">
        <v-col class="workList" :key="i" cols="12" md="4">
          <WorkCard :job="job"></WorkCard>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
import WorkCard from "@/components/WorkComponents/WorkCard.vue";
import enums from "../../server/enums/enums";
export default {
  name: "WorkView",
  data() {
    return {
      myJobs: enums.JOBS,
    };
  },
  components: { WorkCard },
};
</script>

<style>
.work {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.643);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: normal;
}
.workTitle {
  position: absolute;
  font-weight: normal;
  font-size: 45px;
  top: 15%;
  left: 38%;
}
.workTagLine {
  position: absolute;
  /* font-weight: normal; */
  font-size: 20px;
  top: 25%;
  left: 37.5%;
}
.workList {
  /* position: absolute; */
  padding-top: 20%;
  padding-left: 45px;
}
.workBorder {
  display: block;
  width: 550px;
  height: 3px;
  background: #006ac7;
  position: absolute;
  top: 25%;
  left: 31%;
  border-bottom: 4.5px solid #006ac7;
}
</style>
