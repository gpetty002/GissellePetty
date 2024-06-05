<template>
  <div class="work" id="workView">
    <h3 class="workTitle">
      Work <span class="bold luckyBlueText">Experience</span>
    </h3>
    <hr class="workBorder" />
    <v-row class="workList" justify="center">
      <template v-for="(job, i) in myJobs">
        <div :key="i">
          <WorkCard class="workCard" :job="job"></WorkCard>
        </div>
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
  width: 100%;
  height: 200vh;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.643);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: normal;
  align-content: center;
}
.workTitle {
  font-weight: normal;
  font-size: 45px;
  padding-top: 250px;
  align-content: center;
  text-align: center;
}
.workTagLine {
  font-size: 20px;
}
.workList {
  padding-left: 30px;
  padding-right: 30px;
  align-content: center;
}
.workCard {
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 60px;
}
.workBorder {
  width: 550px;
  height: 3px;
  background: #006ac7;
  border-bottom: 4.5px solid #006ac7;
  margin: 0 auto; /* Center the element */
  margin-bottom: 60px;
}
</style>
