<template>
  <div class="projects" id="projectView">
    <h3 class="projectsTitle">
      <span class="bold luckyBlueText">Projects</span>
    </h3>
    <hr class="projectBorder" />
    <template v-for="(index, i) in myProjects">
      <v-col class="projectCards" :key="i" cols="100" md="100">
        <ProjectCard :project="index"></ProjectCard>
      </v-col>
    </template>
  </div>
</template>

<script>
import enums from "../../server/enums/enums";
import ProjectCard from "@/components/WorkComponents/ProjectCard.vue";
export default {
  name: "ProjectView",
  data() {
    return {
      myProjects: enums.PROJECTS,
    };
  },
  components: { ProjectCard },
};
</script>

<style>
.projects {
  position: relative;
  width: 100%;
  height: 520vh;
  background-size: cover;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: normal;
}
.projectsTitle {
  font-size: 50px;
  text-align: center;
}
.projectBorder {
  display: block;
  width: 500px;
  height: 3px;
  margin: 0 auto;
  margin-bottom: 50px;
  border-bottom: 4px solid #006ac7;
}
</style>
